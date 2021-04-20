import { onMounted, onUnmounted } from 'vue'

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
    if (el.value && !el.value.contains(e.target) && !clickedOnExcludedEl) {
      handler()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    console.log(el.value)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  })
}
