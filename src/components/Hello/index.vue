<script lang="ts">
import { defineComponent } from 'vue'

export interface Person {
  name: string
  age: number
}

export default defineComponent({
  name: 'Hello',
  setup() {
    const person: Person = { name: 'Alex', age: 22 }
    return { person }
  }
})
</script>

<template>
  <div class="hello">
    <p>Hello {{ person.name }} !</p>
  </div>
</template>

<style scoped>
.hello {
  display: block;
  border: 1px solid blue;
  padding: 8px;
}
</style>
