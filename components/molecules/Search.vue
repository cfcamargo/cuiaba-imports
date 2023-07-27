<template>
  <div class="bg-zinc-900 rounded-full">
    <form @submit.prevent="submit" class="flex gap-2 items-center justify-between px-2 py-1">
      <input name="search" id="search" placeholder="Digite para buscar" autocomplete="off" v-model="searchTerm" class="bg-transparent px-2 py-2 placeholder:text-zinc-600 focus:outline-none text-white text-xs"/>
      <label for="search" @click="submit" class="px-2 border-l border-zinc-600">
        <Search color="white" :size="20"/>
      </label>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { useProductStore } from '@/store/products'

const searchTerm = ref<String>('')

const router = useRouter()
const store= useProductStore()
async function submit(key:string,){
  if(searchTerm.value){
    store.resetFilters()
    store.setFilter('title', searchTerm.value)
    await router.push({name: 'shop'})
    await store.fetchProdutcs()

    await nextTick()

    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

}


</script>
