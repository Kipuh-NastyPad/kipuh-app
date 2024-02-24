<template>
  <div>
    <pv-dynamic-dialog></pv-dynamic-dialog>
    <pv-button label="Test" @click="showProducts()"></pv-button>
  </div>
</template>
<script setup lang="ts">
import ProductListDemo from './ProductListDemo.vue'
import { useDialog } from 'primevue/usedialog'

const dialog = useDialog()

const showProducts = () => {
  dialog.open(ProductListDemo, {
    onCancel: (e: any) => {
      console.log(e) // {user: 'primetime'}
    }
  })
}
</script>
<style lang=""></style>
