<template>
  <Base v-bind="allProps" @mousedown="() => (isPressed = true)" @mouseup="() => (isPressed = false)"><slot /></Base>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, defineComponent, ref } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Button',
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
    const isPressed = ref(false)
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        role: 'button',
        ariaPressed: isPressed.value,
        class: classnames('z-btn', props.class)
      }

      return p
    })

    return { allProps, isPressed }
  }
})
</script>

<style></style>
