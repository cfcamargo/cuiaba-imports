<template>
  <Container v-if="mostProducts.length > 0">
    <div class="w-full py-4 pb-4">
      <div class="w-full py-10 flex justify-center">
        <h4 class="text-3xl font-bold text-zinc-950">Mais vendidos</h4>
      </div>

      <div v-if="loading" class="grid grid-cols-3 justify-between w-full py-10">
        <SkeltonLoading />
        <SkeltonLoading />
        <SkeltonLoading />
      </div>

      <div v-else>
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
        >
          <SwiperSlide v-for="(slide, index) in mostProducts" :key="index">
            <NuxtLink :to="`/shop/${slide.id}`">
              <div class="w-full flex flex-col gap-2 py-4 items-center">
                <div class="w-full [h-300px] flex justify-center">
                  <img :src="slide.cover" class=" h-[300px] object-cover">
                </div>

                <div class="flex flex-col gap-4 items-center">
                  <div class="flex flex-col items-center">
                    <h4 class="font-bold">{{ slide.title}}</h4>
                    <span class="text-xs">{{ slide.sub }}</span>
                  </div>

                  <WhatsappButton />
                </div>
              </div>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  </Container>

</template>

<script setup lang="ts">
import {Navigation} from "swiper";
import axios from "axios";
import productProps from "~/models/Product";


const loading = ref(false)

const slidesPerView = ref(3)


const mostProducts = ref<Array<productProps>>([])


async function fetchMostProducts() {
  const api_url :string = `${import.meta.env.VITE_API_URL}/mostproducts?most=sell`
  await axios.get(api_url)
      .then(({ data }) => {
        mostProducts.value = data
      })
      .catch((error) => {
        console.log(error)
      })
  loading.value = false
}


onMounted(async() => {
    if(window.innerWidth < 430){
      slidesPerView.value = 1
    }
    await fetchMostProducts()
})
</script>
