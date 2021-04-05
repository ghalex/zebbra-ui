<template>
  <zb-menu :state="state" v-bind="allProps">
    <zb-menu-button as="ZbButton" class="z-select-button" ref="btn">
      <span v-if="state.selected">{{ state.items.get(state.selected) }}</span>
      <span v-else>Please select</span>
      <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </zb-menu-button>
    <zb-menu-items class="z-select-menu" :style="{ minWidth: minW }">
      <slot />
    </zb-menu-items>
  </zb-menu>
</template>

<script lang="ts">
import { useSelect } from '@/hooks'
import { computed, defineComponent, provide, ref, watch } from 'vue'

import ZbMenu from '../Menu/index.vue'
import ZbMenuButton from '../MenuButton/index.vue'
import ZbMenuItems from '../MenuItems/index.vue'

export default defineComponent({
  name: 'Select',
  components: { ZbMenu, ZbMenuItems, ZbMenuButton },
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  setup(props): any {
    const btn = ref(null)
    const state = useSelect()
    const minW = computed(() => {
      if (btn.value) {
        return (btn.value as any).$el.offsetWidth + 'px'
      }

      return 0 + 'px'
    })

    const allProps = computed(() => {
      const p: any = {
        class: props.class,
        style: {}
      }

      return p
    })

    provide('select-state', state)

    watch(btn, () => {
      if (btn.value) {
        console.log(btn.value)
        console.log()
      }
    })

    return { allProps, state, minW, btn }
  }
})
</script>

<style></style>
