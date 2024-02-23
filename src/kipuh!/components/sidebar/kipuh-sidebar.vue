    <template>
      <div class="bg-yellow-400 h-full border-transparent">
        <kipuh-option
          v-bind="option.values"
          v-for="(option, index) in options"
          :key="index"
        ></kipuh-option>
      </div>
    </template>
    <script setup lang="ts">
    import { ref } from 'vue'
    import KipuhOption from './kipuh-option.vue'
    
    const options = ref([
      {
        values: {
          optionName: 'Home',
          optionIcon: 'pi pi-home',
          subOptions: []
        }
      },
      { values: { optionName: 'Products', optionIcon: 'bi bi-cart', subOptions: [{ suboptionName: 'New', suboptionIcon: 'bi bi-plus', routeName: '' }] } }
    ])
    </script>
    <style scoped></style>
    