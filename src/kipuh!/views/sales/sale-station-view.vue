<template>
  <pv-dynamic-dialog></pv-dynamic-dialog>
  <form @submit="submitChanges" class="p-3 flex flex-column gap-2">
    <div class="p-card p-3">
      <div class="grid m-0">
        <div v-for="(field, index) in fields" :key="index" class="col-4">
          <pv-input-group>
            <component
              v-model="field.input.value.value"
              :is="field.inputComponent"
              v-bind="field.input.bind"
              :placeholder="field.placeholder"
            />
            <pv-input-group-addon v-if="field.hasIcon">
              <i class="pi pi-user"></i>
            </pv-input-group-addon>
          </pv-input-group>
          <small class="p-error" id="text-error">{{
            field.input.value.errorMessage || '&nbsp;'
          }}</small>
        </div>
      </div>
    </div>
    <div class="p-card p-3">
      <pv-data-table :value="products" :rows="5" paginator>
        <template #header>
          <div class="flex justify-content-between align-items-center">
            <h2>Details</h2>
            <div class="flex">
              <pv-button @click="openAddProductDialog()" label="New" icon="pi pi-plus"></pv-button>
            </div>
          </div>
        </template>
        <pv-column field="productName" header="Product Name"></pv-column>

        <pv-column>
          <template #body="{ data }">
            <img :src="data.image" alt="" width="70" />
          </template>
        </pv-column>
        <pv-column field="price" header="Price"></pv-column>
        <pv-column field="quantity" header="Quantity"></pv-column>
        <pv-column field="totalPrice" header="Total Price"></pv-column>
        <pv-column :exportable="false" header="Actions">
          <template #body>
            <div class="flex gap-2">
              <pv-button icon="pi pi-pencil" severity="success" rounded></pv-button>
              <pv-button icon="pi pi-trash" severity="danger" rounded></pv-button>
            </div>
          </template>
        </pv-column>
      </pv-data-table>
      <div class="flex justify-content-end">
        <pv-button type="submit" label="Submit"></pv-button>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useField, useForm } from 'vee-validate'
import KipuhValidator from '@/utils/validator/kipuh-validator'
import { useDialog } from 'primevue/usedialog'
const { handleSubmit } = useForm()

import AddProductDialog from "@/kipuh!/views/sales/dialog/add-product-dialog.vue"

const dialog = useDialog();

const products = ref([
  {
    productName: 'Mango Loco',
    image: 'https://vegaperu.vtexassets.com/arquivos/ids/164742/720081.jpg?v=638246939194970000',
    price: '7',
    quantity: 2,
    totalPrice: 14
  },
  {
    productName: 'Cheetos',
    image: 'https://s7d2.scene7.com/is/image/TottusPE/42223022_1?wid=1500&hei=1500&qlt=70',
    price: '7',
    quantity: 2,
    totalPrice: 14
  },
  {
    productName: 'Pringles Grande',
    image: 'https://plazavea.vteximg.com.br/arquivos/ids/27186787-512-512/920013.jpg',
    price: '7',
    quantity: 2,
    totalPrice: 14
  },
  {
    productName: 'Inca Kola',
    image: 'https://unomasuno.pe/wp-content/uploads/2021/11/paci-6178.png',
    price: '7',
    quantity: 2,
    totalPrice: 14
  },
  {
    productName: 'Picaras 320g',
    image:
      'https://corporacionliderperu.com/45577-large_default/picaras-galletas-chocolate-x-320-gr-pack-x-8-un.jpg',
    price: '7',
    quantity: 2,
    totalPrice: 14
  }
])

const fields = ref({
  name: {
    placeholder: 'Name',
    input: { bind: {}, value: useField('name', KipuhValidator.automaticValidator('Name')) },
    inputComponent: 'pv-input-text',
    hasIcon: true
  },
  identificationNumber: {
    placeholder: 'Identification Number',
    input: {
      bind: {},
      value: useField(
        'identificationNumber',
        KipuhValidator.automaticValidator('Identification Number')
      )
    },
    inputComponent: 'pv-input-text',
    hasIcon: true
  },
  identificationType: {
    placeholder: 'Identification Type',
    input: {
      bind: { options: [{ name: 'RUC' }, { name: 'DNI' }], optionLabel: 'name' },
      value: useField(
        'identificationType',
        KipuhValidator.automaticValidator('Identification Type')
      )
    },
    inputComponent: 'pv-dropdown',
    hasIcon: false
  },
  paymentMethod: {
    placeholder: 'Payment Method',
    input: {
      bind: { options: [{ name: 'Factura' }, { name: 'Boleta' }], optionLabel: 'name' },
      value: useField('paymentMethod', KipuhValidator.automaticValidator('Payment Method'))
    },
    inputComponent: 'pv-dropdown',
    hasIcon: false
  }
})

const submitChanges = handleSubmit((values) => {
  console.log(values)
})

function openAddProductDialog() {
  dialog.open(AddProductDialog, {
    props: {
      modal: true,
      style: {
        width: '40vW'
      },
      header: 'Add Product'
    }
  })
}

onMounted(() => {
  // reniecService.getDNI(73254929).then((res): any => {
  //   console.log(res.data)
  // })
})

</script>
<style scoped></style>
