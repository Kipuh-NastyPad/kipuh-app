<template>
  <div class="h-full">
    <kipuh-navbar class="fixed top-0 z-5"></kipuh-navbar>
    <router-view class="m-4 views"></router-view>
    <!-- <set-demo></set-demo> -->
  </div>
</template>
<script setup lang="ts">
import KipuhNavbar from '@/kipuh!/components/kipuh-navbar.vue'
import SetDemo from '@/kipuh!/sample/SetDemo.vue'
</script>
<style scoped>
.views {
  transform: translateY(70px);
}
</style>
