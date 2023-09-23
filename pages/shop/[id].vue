<template>
  <NuxtLayout>
    <div v-if="loading" class="py-20">
      <Container>
        <div class="w-full flex justify-center">
          <SkeltonLoading />
        </div>
      </Container>
    </div>
    <div v-else>
      <ProductShowTemplate :product="product"/>
      <MostSearchItems/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";
  import axios from "axios";
  import { useProductStore } from '@/store/products'

  const store = useProductStore()
  const route = useRoute()
  const productID = route.params.id

  const title = ref('')

  const loading = ref(true)
  const product = ref<productProps | {}>({})

  async function fetchProductById(){
      loading.value = true
      await axios.get(`${import.meta.env.VITE_API_URL}/products/${productID}`)
          .then(( { data }) => {
            product.value = data
            title.value = data.title
          })
      loading.value = false
  }

  useHead({
    title : `Cuiabá Imports ${title.value ? '| ' + title.value : '| Loja'}`
  })

 onMounted(async () => {
      await fetchProductById()
  })

</script>
