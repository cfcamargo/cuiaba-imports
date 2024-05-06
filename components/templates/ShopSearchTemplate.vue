<template>
    <Container class="py-10">
        <div>
            <h3 class="text-2xl">Exibindo resultados para: {{ store.$getFilterKey }}</h3>
        </div>
        <div class="grid grid-cols-3 gap-4 py-20">
            <div v-for="product in store.$getProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            @currentChange="changePaginate($event)"
            :total="store.$getProductsLength"
            :page-size="16"
            :current-page="store.$getPaginate"
            class="mx-auto"
        />
    </Container>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'

const store = useProductStore()

async function changePaginate(value : number){
    store.setPaginate(value)
    await store.fetchProdutcs(value)
}
</script>

