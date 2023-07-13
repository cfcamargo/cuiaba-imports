<template>
  <Container>
    <div class="w-full py-4 pb-4">
      <div class="w-full py-10 flex justify-start">
        <h4 class="text-xl font-bold text-zinc-950">Itens Mais Buscados</h4>
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
      >
        <SwiperSlide v-for="(slide, index) in 10" :key="index">
          <ProductCard :slider="true" :product="produtc"/>
        </SwiperSlide>
      </Swiper>

    </div>
  </Container>
</template>

<script setup lang="ts">
import {Navigation} from "swiper";
import productProps from "~/models/Product";

const produtc = ref<productProps>({
  cover : 'https://th.bing.com/th/id/R.61f9cb45589aeaf348326bf28ca72708?rik=9cl%2bi%2fjEI%2f%2bIrw&pid=ImgRaw&r=0',
  title : 'Celular Apple Iphone 14 Pro Roxo Profundo',
  sub : 'A16 Bionic | 128gb',
  description : 'djkajkldjkasdjadskads',
  variants : ['128', '256']
})

</script>
