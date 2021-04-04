import { reactive } from 'vue'

interface DialogState {
  isOpen: boolean
  events: any
  open: () => void
  close: () => void
}

export default (): DialogState => {
  const state = reactive({
    isOpen: false,
    events: {
      click: () => {
        state.isOpen = !state.isOpen
      }
    },
    open: () => {
      state.isOpen = true
    },
    close: () => {
      state.isOpen = false
    }
  })

  return state
}
