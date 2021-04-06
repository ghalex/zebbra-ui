<template>
  <div class="flex border p-3">
    <ZbButton>Click me</ZbButton>
    <ZbButton class="primary loading ml-1">Click me</ZbButton>
    <ZbButton class="success ml-1">Click me</ZbButton>
    <ZbButton class="success loading ml-1">Loading</ZbButton>
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
