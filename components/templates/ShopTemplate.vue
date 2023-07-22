<template>
    <ShopSlider />
    <MostSearchItems/>
    <CategoryProductSearch />
    <div v-if="store.$getLoadingStatus" class="w-full max-w-[1120px] mx-auto py-10 grid grid-cols-4 gap-16 justify-center items-center">
        <div v-for="item in 16" :key="item" class="mx-auto h-[400px]">
          <SkeltonLoading />
        </div>
    </div>
    <ProductList :products="store.$getProducts" v-else/>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'

const store = useProductStore()

onMounted(async () => {
    await store.fetchProdutcs();
})

</script>

