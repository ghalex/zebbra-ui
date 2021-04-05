import { onMounted, onUnmounted } from '@vue/runtime-core'

export default (el: any, exclude: any[], handler: () => void): any => {
  function handleOutsideClick(e: Event) {
    e.stopPropagation()

    let clickedOnExcludedEl = false

    exclude.forEach((excludedEl) => {
      if (!clickedOnExcludedEl) {
        clickedOnExcludedEl = excludedEl.contains(e.target)
      }
    })

    // We check to see if the clicked element is not
    // the dialog element and not excluded
    if (!el.value.contains(e.target) && !clickedOnExcludedEl) {
      handler()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  })
}
