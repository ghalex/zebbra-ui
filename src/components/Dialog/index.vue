<template>
  <Teleport to="#teleport">
    <div v-bind="allProps" v-if="state.isOpen" ref="dialogRef"><slot /></div>
  </Teleport>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed, ref } from 'vue'
import { useOutside } from '@/hooks'

export default defineComponent({
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
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { attrs }) {
    const dialogRef = ref(null)

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        role: 'dialog',
        ariaModal: true,
        class: cs('z-dialog', props.class),
        style: {
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 2000,
          transform: 'translate(-50%, -50%)',
          ...props.style
        }
      }

      return p
    })

    const elements = document.getElementsByClassName('z-dialog-disclosure')
    useOutside(dialogRef, elements as any, () => {
      if (props.state && props.autoClose && props.state.isOpen) {
        props.state.close()
      }
    })

    return { allProps, dialogRef }
  }
})
</script>

<style></style>
