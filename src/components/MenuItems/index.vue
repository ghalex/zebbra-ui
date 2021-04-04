<template>
  <div v-if="state.isOpen" v-bind="allProps"><slot /></div>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed, inject } from 'vue'

export default defineComponent({
  name: 'MenuItems',
  props: {
    class: {
      type: String,
      required: false
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const state = inject('menu-state', { isOpen: false, open: () => true, close: () => true })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        role: 'menu',
        class: cs('z-menu-items', props.class),
        style: {
          ...props.style
        },
        'aria-orientation': 'vertical'
      }

      return p
    })

    return { allProps, state }
  }
})
</script>

<style></style>
