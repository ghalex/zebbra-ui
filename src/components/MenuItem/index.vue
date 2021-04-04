<template>
  <Base v-bind="allProps" @mouseover="isActive = true" @mouseout="isActive = false" @click.stop="handleClick">
    <slot v-bind="{ active: isActive }" />
  </Base>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, defineComponent, inject, ref } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup(props, { attrs }) {
    const isActive = ref(false)
    const state = inject('menu-state', { isOpen: false, close: () => true })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        role: 'menuitem',
        class: classnames('z-menu-item', props.class, { active: isActive.value })
      }

      return p
    })

    function handleClick() {
      state.close()
    }

    return { allProps, isActive, handleClick }
  }
})
</script>

<style></style>
