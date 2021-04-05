import { reactive } from 'vue'

export interface SelectState {
  isOpen: boolean
  open: () => void
  close: () => void
  items: Map<any, any>
  selected: null | any
}

export default (): SelectState => {
  const state = reactive({
    isOpen: false,
    selected: null,
    items: new Map(),
    open: () => {
      state.isOpen = true
    },
    toggle: () => {
      state.isOpen = !state.isOpen
    },
    close: () => {
      state.isOpen = false
    }
  })

  return state
}
