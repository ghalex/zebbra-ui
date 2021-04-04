<template>
  <Base v-bind="allProps" @click="handleClick"><slot /></Base>
</template>

<script lang="ts">
import cs from 'classnames'
import { computed, defineComponent, inject } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'MenuButton',
  props: {
    as: {
      type: String,
      default: 'button'
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup(props, { attrs }) {
    const state = inject('menu-state', { isOpen: false, toggle: () => true })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        class: cs('z-menu-button', props.class),
        'aria-haspopup': 'menu',
        'aria-expanded': state.isOpen
      }

      return p
    })

    function handleClick() {
      state.toggle()
    }

    return { allProps, state, handleClick }
  }
})
</script>

<style></style>
