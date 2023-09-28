
import type { Wretch, WretchError } from 'wretch';
import wretch from 'wretch'
import * as QueryStringAddonV from 'wretch/addons/queryString'
import type { QueryStringAddon } from 'wretch/addons/queryString'
import type { AspError } from './interfaces/AspError'

import { nanoid } from 'nanoid'
import { jwtDecode } from 'jwt-decode'
import { UxPinia } from './pinias/UxPinia'
import { assign, isEmpty } from 'lodash'

const uxPinia = new UxPinia()

const helper = {
  endWait(requestId: string) {
    uxPinia.done(requestId)
  },
  wretchErr(err: WretchError, requestId: string) {
    this.endWait(requestId)
    if (err.text) {
      try {
        let apiError: AspError = JSON.parse(err.text)
        return apiError
      } catch (e) {
        console.error(e)
      }
    }
    return <AspError>{
      fail: true,
      route: '',
      code: 'BadError',
      description: 'Could not parse error',
      traceId: '',
      jsonError: JSON.stringify(err)
    }
  }
}

export function checkJwtExpiry(login: any): any {
  let jwtdec: Record<string, string> = jwtDecode(login.jwt)
  if (jwtdec == null) {
    uxPinia.SB_FAILURE('AuthN not found, login required.')
    login.loginOk = false
    return 'missing_jwt'
  } else {
    if (parseInt(jwtdec.exp, 10) * 1000 < new Date().getTime()) {
      uxPinia.SB_FAILURE('AuthN expired, login required.')
      login.loginOk = false
      return 'expired_jwt'
    }
  }
}

export function setupWretch(login: {jwt: string, url: string}) {
  // RestClients cfg
  let assignRest = wretch()
    .addon(QueryStringAddonV.default)
    .defer((w, url, options) => {
      options.requestId = nanoid(5)
      uxPinia.wait({ name: url, waitId: options.requestId })
      return w.auth('Bearer ' + login.jwt).options(options)
    })
    .resolve((resp, w) =>
      resp
        .badRequest(badRequest => {
          let apiError = helper.wretchErr(badRequest, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Bad request - ${apiError.code}`)
          return apiError
        })
        .unauthorized(unauthorized => {
          let apiError = helper.wretchErr(unauthorized, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Unauthorized - ${apiError.code}`)
          checkJwtExpiry(login)
          return apiError
        })
        .forbidden(forbidden => {
          let apiError = helper.wretchErr(forbidden, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Forbidden - ${apiError.code}`)
          checkJwtExpiry(login)
          return apiError
        })
        .internalError(internalError => {
          let apiError = helper.wretchErr(internalError, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Internal server error - ${apiError.code}`)
          return apiError
        })
        .notFound(notFound => {
          let apiError = helper.wretchErr(notFound, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Not found - ${apiError.code}`)
          return apiError
        })
        .timeout(timeOut => {
          let apiError = helper.wretchErr(timeOut, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Timeout - ${apiError.code}`)
          return apiError
        })
        .fetchError(fetchErr => {
          let apiError = helper.wretchErr(fetchErr, w._options.requestId as string)
          if (apiError) uxPinia.SB_FAILURE(`Fetch error - ${apiError.code}`)
          return apiError
        })
        .res(res => {
          helper.endWait(w._options.requestId as string)
          return res.json().catch(err => {
            console.error(err, 'wretch json serialization error')
            let anyErr = helper.wretchErr(err as WretchError, w._options.requestId as string)
            return anyErr
          })
        })
        .catch(err => {
          console.error(err, 'wretch general error')
          let anyErr = helper.wretchErr(err as WretchError, w._options.requestId as string)
          return anyErr
        })
    )
    .url(login.url)
  return Promise.resolve(assignRest)
}

export function defaultRest() {
  let defaultLogin = <{jwt: string, url: string}>{}
  defaultLogin.url = ''
  return defaultLogin
}

export const rest: QueryStringAddon & Wretch<QueryStringAddon, unknown, Promise<any>> = await setupWretch(defaultRest())

export const restr: Record<string, QueryStringAddon & Wretch<QueryStringAddon, unknown, Promise<any>>> = {}


