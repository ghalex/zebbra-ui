<template>
  <div ref="menu" v-bind="allProps"><slot /></div>
</template>

<script lang="ts">
import cs from 'classnames'
import { defineComponent, computed, ref, provide } from 'vue'
import { useOutside } from '@/hooks'

export default defineComponent({
  name: 'Menu',
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
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { attrs }) {
    const menu = ref(null)

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        class: cs('z-menu', props.class),
        style: {
          ...props.style
        }
      }

      return p
    })

    useOutside(menu, [], () => {
      props.state.close()
    })

    provide('menu-state', props.state)

    return { allProps, menu }
  }
})
</script>

<style></style>
