<template>
  <div class="flex items-center border p-3">
    <div class="mr-8">
      <zb-select>
        <zb-option :value="1" class="p-2">Apple</zb-option>
        <zb-option :value="2" class="p-2">Pear</zb-option>
        <zb-option :value="3" class="p-2">Banana</zb-option>
      </zb-select>
    </div>
    <div>
      <select class="z-select danger">
        <option>Please select</option>
        <option :value="1" class="p-2">Apple</option>
        <option :value="2" class="p-2">Pear</option>
        <option :value="3" class="p-2">Banana</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { useMenu } from '@/entry.esm'
import { defineComponent } from 'vue'

export default defineComponent({
  setup(): { state1: any; state2: any } {
    const state1 = useMenu()
    const state2 = useMenu()
    return { state1, state2 }
  }
})
</script>

<style scoped></style>
