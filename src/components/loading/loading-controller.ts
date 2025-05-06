let listeners: ((state: boolean) => void)[] = []
let currentState = false

export const loading = {
  show: () => {
    currentState = true
    listeners.forEach((fn) => fn(true))
  },
  hide: () => {
    currentState = false
    listeners.forEach((fn) => fn(false))
  },
  subscribe: (fn: (state: boolean) => void) => {
    listeners.push(fn)
    fn(currentState)
    return () => {
      listeners = listeners.filter((l) => l !== fn)
    }
  },
}
