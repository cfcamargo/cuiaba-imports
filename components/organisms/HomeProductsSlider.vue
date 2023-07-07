<template>
  <Container>
    <div class="w-full py-4 pb-4">
      <div class="w-full py-10 flex justify-center">
        <h4 class="text-3xl font-bold text-zinc-950">Mais vendidos</h4>
      </div>

      <Swiper
          :modules="[SwiperAutoplay, Navigation ]"
          :slides-per-view="3"
          :loop="true"
          :effect="'creative'"
          :navigation="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
      >
        <SwiperSlide v-for="(slide, index) in 8" :key="index">
            <div class="w-full flex flex-col gap-2 py-4 items-center">
              <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png" class="w-[300px]">

              <div class="flex flex-col gap-4 items-center">
                <div class="flex flex-col">
                  <h4 class="font-bold">Celular Iphone 14 Pro Purple</h4>
                  <span class="text-xs">Apple A16 Bionic | 6gb | 128gb</span>
                </div>

                <WhatsappButton />
              </div>
            </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </Container>
</template>

<script setup lang="ts">
import {Navigation} from "swiper";


</script>
