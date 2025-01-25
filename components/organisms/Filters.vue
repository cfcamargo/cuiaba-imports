<template>
  <div class="w-full flex flex-col gap-4 text-zinc-950">
    <div class="flex justify-between items-center">
      <h4 class="font-bold font-xl">Filtrar Por</h4>
      <button @click="cleanFilters" v-if="store.$getIsFiltered" class="rounded px-4 py-1 border border-transparent hover:border-black">Limpar</button>
    </div>

    <div class="flex flex-col gap-4">
      <div @click="toogleBrandShow" class="flex cursor-pointer justify-between">
        <span class="font-bold">Marca</span>
        <ChevronDown class="transform transition-all ease-in" :class="brandShow ? 'rotate-180' : 'rotate-0'"/>
      </div>
      <ul class="flex flex-col gap-2 px-2" v-show="brandShow">
        <li
            v-for="brand in brandOrdered"
            :key="brand"
            class="transform hover:font-bold hover:scale-105"
            @click="fetchProductByFilter('brand', brand)"
        >
          {{ brand.toUpperCase() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import axios from 'axios'
import { useProductStore } from '@/store/products'

const emits =  defineEmits(['closeFilterdMobile'])

const brandShow = ref(true)
const categoryShow = ref(true)



function toogleBrandShow() {
  brandShow.value = !brandShow.value
}

function tooogleCategoryShow() {
  categoryShow.value = !categoryShow.value
}


const store = useProductStore()
interface Brand {
  name: string;
}

const categories = [
  {name: 'Celulares', value: 'Celular'},
  {name: 'Carregadores', value: 'Carregador'},
  {name: 'Tablets', value: 'Tablet'},
  {name: 'Notebooks', value: 'Notebook'},
  {name: 'Smartwatches', value: 'Smartwatch'},
  {name: 'Receptores', value: 'Receptor'},
  {name: 'Caixas de Som', value: 'Caixa de Som'},
  {name: 'Teclados', value: 'Teclado'},
  {name: 'Fones de Ouvido', value: 'Fone de Ouvido'},
  {name: 'Televisores', value: 'Televisores'},
  {name: 'Roteadores', value: 'Roteadores'},
  {name: 'Repetidores', value: 'Repetidores'},
  {name: 'Suportes', value: 'Suportes'},
  {name: 'Amplificadores', value: 'Amplificadores'},
  {name: 'Tabacaria', value: 'Tabacaria'},
  {name: 'Alto Falantes', value: 'Alto Falante'},
]

async function getUniqueColumnValues() {
  const apiKey = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
  const sheetId = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = 'PRODUTOS_LOJA!F:F';  // Ajuste conforme necessário

  try {
    const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
    const rows = response.data.values;

    if (rows.length) {
      let uniqueValues: Brand[] = [];

      rows.forEach((row: any) => {
        if (row[0]) {
          const lowerCaseValue = row[0].toLowerCase();
          if (!uniqueValues.some(val => val.toLowerCase() === lowerCaseValue)) {
            uniqueValues.push(row[0]);
          }
        }
      });
      uniqueValues.splice(0, 1)
      store.setBrands(uniqueValues)
    } else {
      console.log('No data found.');
      return [];
    }
  } catch (error) {
    console.log('An error occurred:', error);
    return [];
  }
}

async function cleanFilters(){
  store.resetFilters()
  emits('closeFilterdMobile')
  await store.fetchProdutcs()
}

async function fetchProductByFilter(key:string, value :string | Brand){
  store.resetFilters()
  store.setFilter(key, value)
  emits('closeFilterdMobile')
  await store.fetchProdutcs()
  await nextTick()

  const element = document.getElementById('products')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const categoryOrdered = computed(() => {
    return categories.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })
})

const brandOrdered = computed(() => {
    return store.$getBrands.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })
})

onMounted(async () =>{
  await getUniqueColumnValues();
})

</script>
