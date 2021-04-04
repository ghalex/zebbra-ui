<template>
  <Base v-bind="allProps" class="z-input" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Input',
  props: {
    as: {
      type: String,
      default: 'input'
    }
  },
  components: { Base },
  setup(props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        role: 'textbox',
        type: props.as === 'input' ? 'text' : undefined,
        contenteditable: props.as === 'input' ? undefined : true,
        style: {
          minWidth: '50px'
        }
      }

      return p
    })

    return { allProps }
  }
})
</script>

<style></style>
