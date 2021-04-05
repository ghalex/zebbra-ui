<template>
  <Base v-bind="allProps" @mouseover="isActive = true" @mouseout="isActive = false" @click.stop="handleClick" ref="el">
    <slot v-bind="{ active: isActive, selected: isSelected }" />
  </Base>
</template>

<script lang="ts">
import classnames from 'classnames'
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import useSelect, { SelectState } from '@/hooks/useSelect'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'SelectOption',
  props: {
    as: {
      type: String,
      default: 'div'
    },
    class: {
      type: String,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object
    }
  },
  components: { Base },
  setup(props, { attrs }) {
    const el = ref(null)
    const isActive = ref(false)
    const state = inject<SelectState>('select-state', useSelect())
    const isSelected = computed(() => {
      return state.selected === props.value
    })

    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        role: 'menuitem',
        class: classnames('z-option', 'z-menu-item', props.class, { active: isActive.value })
      }

      return p
    })

    function handleClick() {
      state.selected = props.value

      if (props.closeOnClick) {
        state.close()
      }
    }

    onMounted(() => {
      if (props.value && el.value !== null) {
        state.items.set(props.value, (el.value as any).$el.innerText)
      }
    })

    return { allProps, isActive, isSelected, el, handleClick }
  }
})
</script>

<style></style>
