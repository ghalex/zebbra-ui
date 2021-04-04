<template>
  <div class="border p-3">
    <h3 class="">Radios</h3>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <label class="flex items-center mr-2 mb-2">
          <ZbRadio value="r1" name="r" class="small" />
          Small Radio 1
        </label>
        <label class="flex items-center mr-2 mb-2">
          <ZbRadio class="primary" value="r2" name="r" />
          Radio 2
        </label>
        <label class="flex items-center mr-2">
          <ZbRadio class="danger" value="r2" name="r" />
          Radio 3
        </label>
      </div>
      <div class="">
        <ZbRadio
          value="apple"
          class="px-8 min200 rounded-r-none"
          :class="{ 'bg-blue-300': fruite === 'apple' }"
          v-model="fruite"
          as="ZbButton"
        >
          A
        </ZbRadio>
        <ZbRadio
          value="berry"
          class="px-8 min200 rounded-l-none -ml-1"
          :class="{ 'bg-red-300': fruite === 'berry' }"
          v-model="fruite"
          as="ZbButton"
        >
          B
        </ZbRadio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

export default defineComponent({
  setup(): { fruite: Ref<string> } {
    const fruite = ref('apple')
    return { fruite }
  }
})
</script>

<style></style>
