<template>
    <ShopSlider />
    <ProductList :products="store.$getProducts" />
    <MostSearchItems/>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'

const store = useProductStore()

onMounted(async () => {
    await store.fetchProdutcs();
})

</script>

