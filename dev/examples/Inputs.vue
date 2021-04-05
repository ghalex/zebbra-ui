<template>
  <div class="border p-3 flex">
    <div class="mr-8">
      <div>
        <label class="w-50">Name:</label>
        <zb-input v-model="name" placeholder="ex. John Doe" />
      </div>
      <div class="mt-2">
        <label class="w-50">Email:</label>
        <zb-input disabled placeholder="ex. email@gmail.com" value="hello@email.com" />
      </div>

      <div class="mt-2">
        <label class="w-50">Phone:</label>
        <zb-input class="primary" placeholder="ex. +40 (743) 152 161" />
      </div>

      <div class="mt-2">
        <label class="w-50">Error:</label>
        <zb-input class="danger" placeholder="ex. Opps!" />
      </div>
    </div>
    <div>
      <h1>Your name is:</h1>
      <b>{{ name }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(): {} {
    const name = ref('Alex')
    return { name }
  }
})
</script>

<style scoped>
.w-50 {
  display: inline-block;
  width: 60px;
}
</style>
