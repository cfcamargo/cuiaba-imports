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

  async function fetchProductById(){
      loading.value = true
      await axios.get(`http://127.0.0.1:3333/products/${productID}`)
          .then(( { data }) => {
            product.value = data
          })
      loading.value = false
  }


 onMounted(async () => {
      await fetchProductById()
  })

</script>
