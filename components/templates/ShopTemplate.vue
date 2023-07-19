<template>
    <ShopSlider />
    <MostSearchItems />
    <CategoryProductSearch />
    <div v-if="loading" class="mx-auto py-10 grid grid-cols-4">
        <div v-for="item in 16" :key="item">
          <SkeltonLoading />
        </div>
    </div>
    <ProductList :products="products[paginateIndex]" v-else/>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'
import productProps from "~/models/Product";
const store = useProductStore()

const loading = ref(true)

const paginateIndex = ref(0)

const products = ref<Array<Array<productProps>>>([])

onMounted(async () => {
  if(store.$getProductsList.length > 0){
    products.value = store.$getProductsList
    loading.value = false
  } else {
    await store.fetchProdutcs();
    products.value = store.$getProductsList
    loading.value = false
  }
})

</script>

