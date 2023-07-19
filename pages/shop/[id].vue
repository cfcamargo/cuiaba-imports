<template>
  <NuxtLayout>
    <div v-if="loading" class="py-20">
      <Container>
        <div class="w-full flex justify-center">
          <SkeltonLoading />
        </div>
      </Container>
    </div>

    <ProductShowTemplate :product="product" v-else/>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";
  import axios from "axios";
  import { useProductStore } from '@/store/products'

  const store = useProductStore()
  const route = useRoute()
  const productID = route.params.id

  const loading = ref(true)
  const product = ref<productProps | {}>({})


 onMounted(async () => {
    if(store.$getProducts.length > 0){
      product.value = store.$getProductById(Number(productID))[0]
      loading.value = false
    } else {
      await store.fetchProdutcs();
      product.value = store.$getProductById(Number(productID))[0]
      loading.value = false
    }
  })

</script>
