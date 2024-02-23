<template>
  <div class="bg-yellow-400 h-full border-transparent">
    <kipuh-option v-bind="option" v-for="(option, index) in options" :key="index"></kipuh-option>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import KipuhOption from './kipuh-option.vue'

const options = ref([
  {
    optionName: 'Home',
    optionIcon: 'pi pi-home',
    subOptions: []
  },
  {
    optionName: 'Sale',
    optionIcon: 'pi pi-shopping-cart',
    subOptions: [
      { suboptionName: 'New', suboptionIcon: 'bi bi-plus', routeName: 'sale-station-view' }
    ]
  },
  {
    optionName: 'Products',
    optionIcon: 'pi pi-shopping-bag',
    subOptions: [
      { suboptionName: 'List', suboptionIcon: 'bi bi-list', routeName: 'product-list-view' }
    ]
  }
])
</script>
<style scoped></style>
