<template>
  <Container>
    <div class="flex flex-col gap-6 w-full py-10 xs:px-2 md:px-0 bg-white" id="products">
        <div class="flex items-center justify-between">
          <h4 class="text-xl font-bold">Produtos ({{store.$getProductsLength}})</h4>

          <div class="xs:flex md:hidden">
            <el-button @click="toggleFilterInMobile" >Filtros</el-button>
          </div>
        </div>
        <div >
        <div class="flex gap-4 h-auto">
          <div class="w-2/12 py-4 px-2 rounded xs:hidden md:flex">
            <Filters />
          </div>

          <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
            <div class="w-full h-screen py-4 px-2 md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto" v-if="mobileFilterShow">
              <div class="w-full flex justify-end">
                <button @click="toggleFilterInMobile">
                  <X :size="30" color="black"/>
                </button>
              </div>
              <Filters @closeFilterdMobile="mobileFilterShow = false"/>
            </div>
          </transition>

          <div class="w-full">
            <div v-if="store.$getLoadingStatus" class="w-full max-w-[1120px] mx-auto py-10 grid xs:grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="item in 15" :key="item" class="mx-auto h-[400px]">
                    <SkeltonLoading />
                </div>
            </div>

            <div v-else-if="props.products?.length > 0" class="flex-1 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-max">
                <ProductCard :product="product" v-for="product in props.products" :key="product.id" class="max-h-[400px]"/>
            </div>

            <div v-else class="mx-auto py-20">
              <Empty />
            </div>
            <div class="mx-auto py-6 flex justify-center items-center w-full">
                <UPagination v-model="page" :page-count="5" :total="store.$getProductsLength" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import type productProps from "~/models/Product";
  import { useProductStore } from '@/store/products'
  import { X } from 'lucide-vue-next'

  const props = defineProps({
    products : {
      type: Array as PropType<productProps[]>,
      required: true
    }
  })

  const page = ref(1)

  const mobileFilterShow = ref(false)

  const store = useProductStore()

  async function changePaginate(value : number){
    store.setPaginate(value)
    await store.fetchProdutcs(value)


    await nextTick()

    const element = document.getElementById('products')
    if (element) {
        console.log(element)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  async function cleanFilters(){
      store.resetFilters()
      await store.fetchProdutcs()
  }

  function toggleFilterInMobile(){
    mobileFilterShow.value = !mobileFilterShow.value
  }

  watch(page, (newValue, oldValue) => {
    changePaginate(newValue)
  })
</script>
