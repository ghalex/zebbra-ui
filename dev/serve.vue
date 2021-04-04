<template>
  <div id="app" class="p-8">
    <div class="p-4">
      <ZbButton>Click me</ZbButton>
      <ZbButton class="primary ml-1">Click me</ZbButton>
      <ZbButton class="success ml-1">Click me</ZbButton>
    </div>
    <div class="p-4 w-auto">
      <label class="flex">
        <ZbCheckbox />
        Click me
      </label>
      <label class="flex">
        <ZbCheckbox class="danger" />
        Click me
      </label>
    </div>
    <div class="border p-3 mt-4">
      <h3 class="">Radios</h3>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="flex items-center mr-2 mb-2">
            <ZbRadio value="r1" name="r" class="small" />
            Radio 1
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

    <div class="p-4">
      <div class="flex">
        <ZbMenu :state="menu1">
          <ZbMenuButton as="ZbButton" class="flex">
            <span>Open menu</span>
            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </ZbMenuButton>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ZbMenuItems>
              <div class="px-4 py-3 border-b-2 border-gray-500">
                <h2 class="text-sm leading-5">Signed in as</h2>
                <p class="text-sm font-medium leading-5 text-gray-400 truncate">tom@example.com</p>
              </div>
              <ZbMenuItem v-slot="{ active }">
                <a class="p-2 block" :class="{ 'bg-purple-500': active }" @click="() => console.log('cliccc')"
                  >Item 1</a
                >
              </ZbMenuItem>
              <ZbMenuItem disabled class="p-2"> Item 2</ZbMenuItem>
              <ZbMenuSeparator class="bg-gray-500" />
              <ZbMenuItem class="p-2"> Item 3</ZbMenuItem>
            </ZbMenuItems>
          </transition>
        </ZbMenu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useMenu } from '@/entry.esm'

import '@zebbra/themes/dist/main/index.css'
import './main.css'

interface SetupReturn {
  menu1: any
  fruite: Ref<string>
  console: any
}

export default defineComponent({
  name: 'MenuState',
  setup(): SetupReturn {
    const menu1 = useMenu()
    const fruite = ref('apple')

    return { menu1, fruite, console }
  }
})
</script>

<style scoped></style>
