<template>
  <Container>
    <div class="flex flex-col gap-6 w-full py-10 xs:px-2 md:px-0" id="products">
      <div class="flex items-center justify-between"><h4 class="text-xl font-bold">Produtos ({{store.$getProductsLength}})</h4>
        <el-button @click="cleanFilters" v-if="store.$getIsFiltered">Limpar Filtros</el-button>
      </div>
      <div v-if="props.products?.length > 0">
        <ul class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-16">
          <li v-for="product in props.products" :key="product.id">
            <ProductCard :product="product"/>
          </li>
        </ul>

        <div class="mx-auto py-6 flex justify-center items-center w-full">
          <el-pagination
              background
              layout="prev, pager, next"
              @currentChange="changePaginate($event)"
              :total="store.$getProductsLength"
              :page-size="16"
              :current-page="store.$getPaginate"
              class="mx-auto"
          />
        </div>
      </div>
      <div v-else class="mx-auto py-20">
        <Empty />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";
  import { useProductStore } from '@/store/products'

  const store = useProductStore()

  async function changePaginate(value : number){
    store.setPaginate(value)
    await store.fetchProdutcs(value)

    await nextTick()

    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  async function cleanFilters(){
      store.resetFilters()
      await store.fetchProdutcs()
  }

  const props = defineProps({
    products : Array<Array<productProps>>
  })

</script>

