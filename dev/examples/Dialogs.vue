<template>
  <div class="border p-3">
    <h3 class="">Dialogs</h3>
    <div class="grid grid-cols-2 gap-2">
      <ZbDialogDisclosure :state="dlg1">Open dialog</ZbDialogDisclosure>
      <ZbDialog :state="dlg1">
        <h2 class="border-b-2 border-gray-500 px-2 py-2">Hy! this is a dialog</h2>
        <div class="p-8">
          <ZbButton @click="dlg1.close">Click to close</ZbButton>
        </div>
      </ZbDialog>
      <ZbDialogBackdrop class="bg-purple-200 opacity-30" :state="dlg1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDialog } from '@/entry.esm'

export default defineComponent({
  setup(): any {
    const dlg1 = useDialog()
    return { dlg1 }
  }
})
</script>

<style></style>
