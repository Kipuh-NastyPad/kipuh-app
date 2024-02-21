<template lang="">
  <div class="pt-1 w-full text-white">
    <div class="flex gap-2 align-items-center p-3 bg-yellow-700 hover:bg-yellow-800 border-round">
      <i :class="props.suboptionIcon" class="text-2xl"></i>
      <span>{{ props.suboptionName }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
interface KipuhSubOptionProps {
  suboptionName: string
  suboptionIcon: string
}

const props = defineProps<KipuhSubOptionProps>()
</script>
<style lang=""></style>
