<template>
    <Container class="py-10">
        <div>
            <h3 class="text-2xl">Exibindo resultados para: {{ store.$getFilterKey }}</h3>
        </div>
        <div v-if="store.$getLoadingStatus" class="w-full max-w-[1120px] mx-auto py-10 grid xs:grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="item in 15" :key="item" class="mx-auto h-[400px]">
                <SkeltonLoading />
            </div>
        </div>
        <div v-else class="grid xs:grid-cols-1 md:grid-cols-3 gap-4 py-20">
            <div v-for="product in store.$getProducts" :key="product.id">
                <ProductCard :product="product"/>
            </div>
        </div>
        <div class="w-full flex justify-center">
            <el-pagination
                background
                layout="prev, pager, next"
                @currentChange="changePaginate($event)"
                :total="store.$getProductsLength"
                :page-size="16"
                :current-page="store.$getPaginate"
            />
        </div>
    </Container>
</template>

<script setup lang="ts">
import {useProductStore} from '@/store/products'

const router = useRouter()
const route = useRoute()

const store = useProductStore()

async function changePaginate(value : number){
    store.setPaginate(value)
    await store.fetchProdutcs(value)
}


onMounted(async () => {
    if (route.query.title) {
        store.setFilter('title', route.query.title)
    }

    if(route.query.category){
        store.setFilter('category', route.query.category)
    }

    await store.fetchProdutcs()
})
</script>

