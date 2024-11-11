<template>
    <div class="w-full relative">
      <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation ]"
          :slides-per-view="1"
          :loop="true"
          :navigation="true"
          :pagination="true"
          :autoplay="{
            delay: 3000,
          }"
      >
        <SwiperSlide>
          <div class="w-full h-[calc(100vh_-_120px)] flex flex-col items-center bg-[url('/localizado.jpeg')] bg-cover bg-center justify-center">
            <h4 class="xs:text-2xl md:text-5xl xs:max-w-[300px] md:max-w-[700px] font-bold text-center text-zinc-900">ESTAMOS LOCALIZADOS EM PEDRO JUAN CABALLERO</h4>
            <a href="https://maps.app.goo.gl/5q4EAMbmMapsWi9p9" class="px-6 mt-4 py-2 rounded-full bg-black text-white" target="_blank" >Clique para chegar na nossa loja</a>
          </div>
        </SwiperSlide>
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="w-full h-[calc(100vh_-_120px)] flex flex-col items-center">
              <img :src="slide" class="h-full w-full object-cover">
          </div>
        </SwiperSlide>
      </Swiper>
      <SocialLinks class="z-20"/>
    </div>
</template>

<script setup lang="ts">
const isMobile = ref(false)

const slides = computed(() => {
  let slides_dekstop:string[] = [
    '/banner/iphone.png',
    '/banner/alexa.png',
    '/banner/som.png',
    '/banner/future.png',
  ]

  let mobile_sliders:string[] = [
    '/banner/miphone.png',
    '/banner/malexa.png',
    '/banner/msom.png',
    '/banner/mfuture.png',
  ]

  if(isMobile.value){
    return mobile_sliders
  } else {
    return slides_dekstop
  }
})

onMounted(()=>{
  if(window.innerWidth < 430){
    
    isMobile.value = true
  }
})

</script>

<style>
  .bebas-neue-regular {
      font-family: "Bebas Neue", sans-serif !important;
      font-weight: 400;
  }
</style>