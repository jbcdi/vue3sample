import { last } from 'lodash'
import { nanoid } from 'nanoid'
import { Pinia, Store } from 'pinia-class-component'
import { useToast } from 'vue-toastification'

const toast = useToast()

@Store({})
export class UxPinia extends Pinia {
  Ux = {}
  waiting: any = []

  waitFor(v?: { time?: number; waitId?: string }) {
    if (v == null) v = { time: 2007, waitId: nanoid(5) }
    if (v.waitId == null || v.waitId == '') v.waitId = nanoid(5)
    setTimeout(() => this.done(v!.waitId!), v.time)
  }

  wait(v: { name: string; waitId?: string }) {
    let waiter = {
      url: last(decodeURIComponent(v.name).split('/api/')) ?? '',
      name: v.name,
      waitId: '',
      started: Date.now()
    }
    if (!v.waitId) {
      waiter.waitId = v.name
      this.waiting.push(waiter)
    } else {
      waiter.waitId = v.waitId
      this.waiting.push(waiter)
    }
  }

  done(v: string) {
    let waiterIdx = this.waiting.findIndex(n => n.waitId == v)
    if (waiterIdx == -1) return
    this.waiting.splice(waiterIdx, 1)
  }

  SB_PRIMARY(v: string) {
    toast.info(v)
  }

  SB_SUCCESS(v: string) {
    toast.success(v)
  }

  SB_FAILURE(v: string) {
    toast.error(v)
  }
}
