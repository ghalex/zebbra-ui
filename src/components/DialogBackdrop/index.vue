<template>
  <Teleport to="#teleport">
    <div v-if="state.isOpen" v-bind="allProps"><slot /></div>
  </Teleport>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'DialogBackdrop',
  props: {
    class: {
      type: String,
      required: false
    },
    style: {
      type: Object,
      default: () => ({})
    },
    state: {
      type: Object
    }
  },
  setup(props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        ariaModal: true,
        class: cs('z-dialog-backdrop', props.class),
        style: {
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          ...props.style
        }
      }

      return p
    })

    return { allProps }
  }
})
</script>

<style></style>
