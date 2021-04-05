<template>
  <Base v-bind="allProps" class="z-input" :value="modelValue" @input="handleChange" />
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
    },
    modelValue: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup(props, { attrs, emit }) {
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

    function handleChange(e: any) {
      emit('update:modelValue', e.target.value)
    }
    return { allProps, handleChange }
  }
})
</script>

<style></style>
