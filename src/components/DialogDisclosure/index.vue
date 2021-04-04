<template>
  <Base v-bind="allProps" v-on="state.events"><slot /></Base>
</template>

<script lang="ts">
import cs from 'classnames'
import { computed, defineComponent } from 'vue'
import Base from '../Base/index.vue'

export default defineComponent({
  name: 'DialogDisclosure',
  props: {
    as: {
      type: String,
      default: 'ZbButton'
    },
    state: {
      type: Object,
      default: () => ({})
    },
    class: {
      type: String,
      required: false
    },
    autoDisable: {
      type: Boolean,
      default: true
    }
  },
  components: { Base },
  setup(props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        as: props.as,
        class: cs('z-dialog-disclosure', props.class),
        'aria-haspopup': 'dialog',
        'aria-expanded': props.state.isOpen,
        disabled: props.state.isOpen && props.autoDisable
      }

      return p
    })

    return { allProps }
  }
})
</script>

<style></style>
