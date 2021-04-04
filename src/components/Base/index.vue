<template>
  <component v-bind="allProps" :is="as"><slot /></component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Base',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    disabled: {
      type: Boolean,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const allProps = computed(() => {
      const p: any = {
        disabled: props.disabled ? true : undefined,
        ariaDisabled: props.disabled ? true : undefined,
        class: props.class,
        style: {
          pointerEvents: props.disabled ? 'none' : undefined
        }
      }

      return p
    })

    return { allProps }
  }
})
</script>

<style></style>
