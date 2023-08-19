

/**
 * EventBus
 * const { bus } = useBus()
 * bus.on('auth.loggedin', () => {
 *    console.log('User had loged in')
 * })
 */

/**
 * Event names:
 * 
 */

/**
 * Bus Event Listener
 */
export type BusListener<T = any> = (event: string, payload?: T) => void

const book: Map<string, BusListener[]> = new Map<string, BusListener[]>

export type BusOnFn<T = any> = (event: string, fn: BusListener<T>) => void
export type BusOffFn<T = any> = (event: string, fn: BusListener<T>) => void
export type BusOnceFn<T = any> = (event: string, fn: BusListener<T>) => void
export type BusEmitFn<T = any> = (event: string, payload: T) => void

export function useBus () {

  const on: BusOnFn = (event, fn) => {
    const listeners = book.get(event) || []
    listeners.push(fn)
    book.set(event, listeners)
  }

  const off: BusOffFn = (event, fn) => {
    let listeners = book.get(event) || []
    listeners = listeners.filter(listener => listener === fn)
    book.set(event, listeners)
  }

  const once: BusOnceFn = (event, fn) => {
    off(event, fn)
    on(event, fn)
  }

  const emit: BusEmitFn = (event, payload) => {
    const listeners = book.get(event) || []
    listeners.forEach(listener => {
      listener.call(undefined, payload)
    })
  }
}