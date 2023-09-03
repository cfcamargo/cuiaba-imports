<template>
    <ShopSlider />
    <MostSearchItems/>
    <ProductList :products="store.$getProducts" />
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'

const store = useProductStore()

onMounted(async () => {
    await store.fetchProdutcs();
})

</script>

