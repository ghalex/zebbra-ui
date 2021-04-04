<template>
  <div v-bind="allProps" />
</template>

<script lang="ts">
import cs from 'classnames'
import { computed, defineComponent } from 'vue'

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
  components: {},
  setup(props, { attrs }) {
    const allProps = computed(() => {
      const p: any = {
        ...attrs,
        class: cs('z-menu-separator', props.class)
      }

      return p
    })

    return { allProps }
  }
})
</script>

<style></style>
