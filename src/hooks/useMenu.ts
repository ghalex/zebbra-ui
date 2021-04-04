import { reactive } from 'vue'

interface MenuState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export default (): MenuState => {
  const state = reactive({
    isOpen: false,
    open: () => {
      state.isOpen = true
    },
    toggle: () => {
      console.log('toggle')
      state.isOpen = !state.isOpen
    },
    close: () => {
      state.isOpen = false
    }
  })

  return state
}
