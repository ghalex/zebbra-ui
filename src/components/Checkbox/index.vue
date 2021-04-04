<template>
  <Base v-bind="allProps" @click="handleClick" @change="handleChange">
    <slot v-bind="{ checked: isChecked }" />
  </Base>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, ref, defineComponent, watch } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'Checkbox',
  props: {
    as: {
      type: String,
      default: 'input'
    },
    modelValue: {
      type: Boolean,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  components: { Base },
  setup(props, { emit, attrs }) {
    const isChecked = ref(props.modelValue)
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        type: props.as === 'input' ? 'checkbox' : undefined,
        role: 'checkbox',
        ariaChecked: isChecked.value,
        checked: isChecked.value,
        class: props.as === 'input' ? classnames('z-checkbox', props.class) : props.class
      }

      return p
    })

    function handleClick() {
      if (props.as !== 'input') {
        isChecked.value = !isChecked.value
        emit('update:modelValue', isChecked.value)
        emit('change', isChecked.value)
      }
    }

    function handleChange(e: Event) {
      e.stopImmediatePropagation()
      e.preventDefault()

      isChecked.value = !isChecked.value

      emit('update:modelValue', isChecked.value)
      // emit('change', isChecked.value)
    }

    watch(
      () => props.modelValue,
      () => {
        isChecked.value = props.modelValue
      }
    )

    return { isChecked, allProps, handleClick, handleChange }
  }
})
</script>

<style></style>
