<template>
  <div class="">
    <form @submit="">
      <div class="grid m-0">
        <div v-for="(field, index) in fields" :key="index" class="col-12">
          <pv-input-group>
            <component
              v-model="field.input.value.value"
              :is="field.inputComponent"
              v-bind="field.input.bind"
              :placeholder="field.placeholder"
            />
            <pv-input-group-addon v-if="field.hasIcon">
              <i class="pi pi-box"></i>
            </pv-input-group-addon>
          </pv-input-group>
          <small class="p-error" id="text-error">{{
            field.input.value.errorMessage || '&nbsp;'
          }}</small>
        </div>
      </div>
      <div class="flex gap-2 justify-content-end">
        <pv-button label="Ok" icon="pi pi-check" severity="success"></pv-button>
        <pv-button label="Cancel" icon="pi pi-times" severity="danger"></pv-button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';
import KipuhValidator from '@/utils/validator/kipuh-validator'

const fields = ref({
  name: {
    placeholder: 'Name',
    input: { bind: {}, value: useField('name', KipuhValidator.automaticValidator('Name')) },
    inputComponent: 'pv-input-text',
    hasIcon: true
  },
  productCode: {
    placeholder: 'Product Code',
    input: { bind: {}, value: useField('productCode', KipuhValidator.automaticValidator('Name')) },
    inputComponent: 'pv-input-text',
    hasIcon: true
  },
  quantity: {
    placeholder: 'Quantity',
    input: { bind: {}, value: useField('stock', KipuhValidator.automaticValidator('Name')) },
    inputComponent: 'pv-input-text',
    hasIcon: true
  },
})

</script>
<style lang="">
  
</style>