<template>
  <Base v-bind="allProps" @click="handleClick">
    <slot v-bind="{ checked: isChecked }" />
  </Base>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, defineComponent } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Radio',
  props: {
    as: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup(props, { emit, attrs }) {
    const isChecked = computed(() => {
      return props.value === props.modelValue
    })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        type: props.as === 'input' ? 'radio' : undefined,
        role: 'radio',
        checked: isChecked.value,
        ariaChecked: isChecked.value,
        class: props.as === 'input' ? classnames('z-radio', props.class) : props.class
      }

      return p
    })

    function handleClick() {
      emit('update:modelValue', props.value)
    }

    return { isChecked, allProps, handleClick }
  }
})
</script>

<style></style>
