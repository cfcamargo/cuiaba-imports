<template>
  <Container>
    <div class="w-full py-4 pb-4">
      <div class="w-full py-10 flex justify-start">
        <h4 class="text-xl font-bold text-zinc-950">Itens Mais Buscados</h4>
      </div>
      <div v-if="loading" class="grid grid-cols-4">
        <div v-for="item in 4" :key="item">
          <SkeltonLoading />
        </div>
      </div>
      <Swiper
          :modules="[SwiperAutoplay, Navigation ]"
          :slides-per-view="4"
          :loop="true"
          :effect="'creative'"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          v-else
      >
        <SwiperSlide v-for="(product, index) in store.$getShopMostSearchProducts" :key="index">
          <ProductCard :slider="true" :product="product"/>
        </SwiperSlide>
      </Swiper>

    </div>
  </Container>
</template>

<script setup lang="ts">
import {Navigation} from "swiper";
import { useProductStore } from '@/store/products'

const store = useProductStore()
const slidesPerView = ref(4)
const loading = ref(true)


onMounted(async () => {
  if(window.innerWidth < 400){
    slidesPerView.value = 1
  }

  if(store.productsList.length > 0){
    loading.value = false
  } else {
    await store.fetchProdutcs()
    loading.value = false
  }

})

</script>
