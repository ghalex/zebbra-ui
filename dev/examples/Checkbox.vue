<template>
  <div class="flex border p-3">
    <label class="flex">
      <ZbCheckbox class="small" />
      Click me
    </label>
    <label class="flex ml-4">
      <ZbCheckbox class="primary" />
      Primary
    </label>
    <label class="flex ml-4">
      <ZbCheckbox class="danger" />
      Danger
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(): {} {
    return {}
  }
})
</script>

<style scoped>
.maxW {
  max-width: 300px;
}
</style>
