import {
  format,
  parseISO,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatDuration,
  differenceInMilliseconds
} from 'date-fns'
import { isString } from 'lodash'
//import * as localizationEn from '@/locales/en.json'
//type localizationType = typeof localizationEn

class VueHg {
  constructor() {
    //this.initializeTranslation()
  }

  // i18n
  /*
  tl: localizationType = JSON.parse(JSON.stringify(localizationEn))
  async initializeTranslation() {
    this.parseKeysToValue(this.tl)
  }

  parseKeysToValue(obj: any, path = '') {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        obj[key] = path + key
      } else {
        path += `${key}.`
        this.parseKeysToValue(obj[key], path)
        path = path.replace(`${key}.`, '')
      }
    }
  }
  */

  // date-fns
  fullIsoDate(v: string | null) {
    if (v == null) return ''
    return format(parseISO(v), 'yyyy-MM-dd HH:mm:ss')
  }
  mmDate(v: string) {
    return format(parseISO(v), 'MM-dd HH:mm:ss')
  }
  mdDate(v: string) {
    return format(parseISO(v), 'dd.MM EEE HH:mm')
  }
  tsDate(v: string) {
    return format(parseISO(v), 'HH:mm:ss')
  }
  distanceToNow(v: string | null) {
    if (v == null) return ''
    return formatDistanceToNow(parseISO(v), { includeSeconds: true })
  }
  distanceToNowExact(v: string) {
    return formatDistanceToNowStrict(parseISO(v))
  }
  differenceExecTime(past: string, now: string) {
    let msDiff = differenceInMilliseconds(parseISO(now), parseISO(past))
    let sDiffStr = (msDiff / 1000).toString()
    if (sDiffStr.length > 5) sDiffStr = sDiffStr.split('.')[0]
    return sDiffStr
  }

  hmAbExecTime(v: string) {
    if (v == null || v == '') return '0ms'
    let m = `${v.split(':')[0]}m`
    if (m == '0m') m = ''
    let s = `${v.split(':')[1].split('.')[0]}s`
    if (s == '0s') s = ''
    let ms = `${v.split(':')[1].split('.')[1]}ms`

    if (s.startsWith('0')) s = s.substring(1)
    if (ms.startsWith('0')) ms = ms.substring(1)

    let hm = `${m} ${s} ${ms}`
    hm = hm.trim()
    return hm
  }

  wait(ms = 250) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  copy(v: string | unknown, interpoled = '') {
    if (!isString(v)) return
    if (interpoled.includes('v')) {
      v = interpoled.replace('v', v)
    }
    //VueInstance.$toast('copied data to clipboard.', { timeout: 1000, hideProgressBar: true })
    navigator.clipboard.writeText(v as string)
  }

  decodeRouteQueryStr(v: string): any | null {
    if (!v.includes('?')) return null
    let qd = {}
    qd['route'] = v.split('?')[0]
    let queryStr = v.split('?')[1]
    queryStr.split(`&`).forEach(item => {
      let [k, j] = item.split(`=`)
      j = j && decodeURIComponent(j)
      ;(qd[k] = qd[k] || []).push(j)
    })
    return qd
  }
}

export function wait(ms = 250) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
