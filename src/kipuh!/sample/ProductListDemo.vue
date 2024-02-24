<template>
  <div>
    <pv-button label="Click me!" @click="buttonClick()"></pv-button>    
  </div>
</template>
<script setup lang="ts">
/* ProductListDemo.vue */
const emit = defineEmits(['onCancel', 'onSave'])

function buttonClick() {
    emit('onCancel', {user: 'primetime'});
}
</script>
<style lang="">
  
</style>