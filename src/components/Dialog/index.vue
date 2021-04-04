<template>
  <Teleport to="#teleport">
    <div v-if="state.isOpen" ref="dialog" v-bind="allProps"><slot /></div>
  </Teleport>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed, ref } from 'vue'
// import { useOnOutsidePress } from 'vue-composable'
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
    const dialog = ref(null)

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

    useOutside(dialog, [], () => {
      if (props.state && props.autoClose) {
        props.state.close()
      }
    })

    return { allProps, dialog }
  }
})
</script>

<style></style>
