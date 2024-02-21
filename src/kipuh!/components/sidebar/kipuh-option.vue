<template>
  <div class="px-1 pt-1 w-full text-white">
    <div @click="toggleSuboptions()" class="flex gap-2 align-items-center p-3 bg-yellow-600 hover:bg-yellow-800 border-round">
      <i :class="optionIcon" class="text-2xl"></i>
      <span>{{ props.optionName }}</span>
    </div>
    <div
      class="flex flex-column"
      :class="{
        'subitems-closed': !toggleSuboptionsStatus,
        'subitems-opened': toggleSuboptionsStatus
      }"
    >
      <kipuh-suboption
        v-bind="subOption"
        v-for="(subOption, index) in props.subOptions"
        :key="index"
      ></kipuh-suboption>
    </div>
  </div>
</template>
<script setup lang="ts">
import KipuhSuboption from './kipuh-suboption.vue'
import { ref } from 'vue'

interface KipuhOptionProps {
  optionName: string | 'xdxd'
  optionIcon: string | null
  subOptions: Array<{ suboptionName: string; suboptionIcon: string }>
}

const toggleSuboptionsStatus = ref(false)

function toggleSuboptions() {
  toggleSuboptionsStatus.value = !toggleSuboptionsStatus.value
}

const props = defineProps<KipuhOptionProps>()
</script>
<style scoped>
.subitems-closed {
  height: 0;
  overflow-y: hidden;
}

.subitems-opened {
  height: fit-content;
  max-height: 300px;
}
</style>
