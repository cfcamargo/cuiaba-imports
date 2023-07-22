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
          :slides-per-view="slidesPerView"
          :loop="true"
          :effect="'creative'"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          v-else
      >
        <SwiperSlide v-for="(product, index) in mostProducts" :key="index">
          <ProductCard :slider="true" :product="product"/>
        </SwiperSlide>
      </Swiper>

    </div>
  </Container>
</template>

<script setup lang="ts">
import {Navigation} from "swiper";
import {SymbolKind} from "vscode-languageserver-types";
import Array = SymbolKind.Array;
import productProps from "~/models/Product";
import axios from "axios";

const slidesPerView = ref(4)
const loading = ref(true)

const mostProducts = ref<Array<productProps>>([])


async function fetchMostProducts() {
  const api_url :string = `http://127.0.0.1:3333/mostproducts?most=search`
  await axios.get(api_url)
      .then(({ data }) => {
        mostProducts.value = data
      })
      .catch((error) => {
        console.log(error)
      })
  loading.value = false
}


onMounted(async () => {
  if(window.innerWidth < 400){
    slidesPerView.value = 1
  }
  await fetchMostProducts()
})

</script>
