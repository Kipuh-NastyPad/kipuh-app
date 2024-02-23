<template>
  <div class="p-card p-3">
    <pv-data-table :filters="filters" :value="products" :rows="5" paginator>
      <template #header>
        <div class="flex justify-content-between align-items-center">
          <div class="flex gap-2">
            <pv-button label="New" icon="pi pi-plus" severity="success"></pv-button>
            <pv-button label="Delete" icon="pi pi-minus" severity="danger"></pv-button>
            <pv-button label="Import" icon="pi pi-upload" severity="help"></pv-button>
            <pv-button label="Export as CSV" icon="pi pi-download" severity="info"></pv-button>
          </div>
          <pv-icon-field iconPosition="left">
            <pv-input-icon>
              <i class="pi pi-search" />
            </pv-input-icon>
            <pv-input-text v-model="filters['global'].value" placeholder="Search" />
          </pv-icon-field>
        </div>
      </template>
      <pv-column field="productName" header="Product Name"></pv-column>
      <pv-column>
        <template #body="{ data }">
          <img :src="data.image" alt="" width="70" />
        </template>
      </pv-column>
      <pv-column field="price" header="Price"></pv-column>
      <pv-column field="stock" header="Stock"></pv-column>
      <pv-column field="category" header="Category"></pv-column>
      <pv-column header="Status">
        <template #body="{ data }">
          <div>
            <pv-tag severity="success" :value="data.status"></pv-tag>
          </div>
        </template>
      </pv-column>
      <pv-column :exportable="false" header="Actions">
        <template #body>
          <div class="flex gap-2">
            <pv-button icon="pi pi-pencil" severity="success" rounded></pv-button>
            <pv-button icon="pi pi-trash" severity="danger" rounded></pv-button>
          </div>
        </template>
      </pv-column>
    </pv-data-table>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useField, useForm } from 'vee-validate'
import KipuhValidator from '@/utils/validator/kipuh-validator'

import { FilterMatchMode } from 'primevue/api'

const { handleSubmit } = useForm()

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  productName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  productCode: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const products = ref([
  {
    productCode: 67673246,
    productName: 'Mango Loco Tipo 1',
    image: 'https://vegaperu.vtexassets.com/arquivos/ids/164742/720081.jpg?v=638246939194970000',
    price: '7',
    category: "Bebidas",
    stock: '46',
    status: 'INSTOCK'
  },
  {
    productCode: 67673246,
    productName: 'Mango Crazy Tipo 2',
    image: 'https://vegaperu.vtexassets.com/arquivos/ids/164742/720081.jpg?v=638246939194970000',
    price: '7',
    category: "Bebidas",
    stock: '46',
    status: 'INSTOCK'
  },
  {
    productCode: 67673246,
    productName: 'Mango Loco Tipo 3',
    image: 'https://vegaperu.vtexassets.com/arquivos/ids/164742/720081.jpg?v=638246939194970000',
    price: '7',
    category: "Bebidas",
    stock: '46',
    status: 'INSTOCK'
  },
  {
    productCode: 67673246,
    productName: 'Mango Loco Tipo 4',
    image: 'https://vegaperu.vtexassets.com/arquivos/ids/164742/720081.jpg?v=638246939194970000',
    price: '7',
    category: "Bebidas",
    stock: '46',
    status: 'INSTOCK'
  }
])

onMounted(() => {
  // reniecService.getDNI(73254929).then((res): any => {
  //   console.log(res.data)
  // })
})
</script>
<style scoped></style>
