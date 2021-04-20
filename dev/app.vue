<template>
  <div class="p-8">
    <div class="p-4">
      <Menus />
    </div>
    <div class="p-4">
      <Dialogs />
    </div>
    <!-- <div class="p-4">
      <Buttons />
    </div>
    <div class="p-4">
      <Checkbox />
    </div>
    <div class="p-4">
      <Radios />
    </div>
    <div class="p-4">
      <Inputs />
    </div>
    <div class="p-4"><Selects /></div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import '@zebbra/themes/dist/main/index.css'
import './app.css'

import * as examples from './examples'

interface SetupReturn {
  fruite: Ref<string>
  console: any
}

export default defineComponent({
  name: 'MenuState',
  components: { ...examples },
  setup(): SetupReturn {
    const fruite = ref('apple')

    return { fruite, console }
  }
})
</script>

<style></style>
