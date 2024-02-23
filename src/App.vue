<template>
  <div class="h-full">
    <kipuh-navbar class="fixed top-0 z-5"></kipuh-navbar>
    <router-view class="m-4 views"></router-view>
  </div>
</template>
<script setup lang="ts">
import KipuhNavbar from '@/kipuh!/components/kipuh-navbar.vue'
</script>
<style scoped>
.views {
  transform: translateY(70px);
}
</style>
