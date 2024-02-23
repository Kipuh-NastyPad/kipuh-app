<template>
  <div class="navbar bg-yellow-400 w-full px-4">
    <div class="flex justify-content-between align-items-center h-full">
      <kipuh-logo></kipuh-logo>
      <div class="">
        <pv-button
          style="color: black"
          class="bg-transparent border-transparent text-xl"
          icon="bi bi-list"
          raised
          @click="visible = true"
        ></pv-button>
      </div>
    </div>
    <pv-sidebar
      class="border-none"
      style="height: calc(100vh - 70px); align-self: end"
      v-model:visible="visible"
      :modal="false"
    >
      <template #container>
        <kipuh-sidebar></kipuh-sidebar>
      </template>
    </pv-sidebar>
  </div>
</template>
<script setup lang="ts">
// Components
import KipuhLogo from './kipuh-logo.vue'
import KipuhSidebar from './sidebar/kipuh-sidebar.vue'

import { ref } from 'vue'

// const emits = defineEmits(['display-sidebar'])

const visible = ref(false)
</script>
<style scoped>
.navbar {
  height: 70px;
}
</style>
