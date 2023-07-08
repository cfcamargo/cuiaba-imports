<template>
    <div class="w-full relative">
      <Swiper
          :modules="[SwiperAutoplay, Navigation ]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :navigation="true"
          :pagination="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="w-full h-[calc(100vh_-_120px)] flex flex-col items-center">
              <img :src="slide" class="w-full object-cover object-bottom">
          </div>
        </SwiperSlide>
      </Swiper>
      <SocialLinks class="z-40"/>
    </div>
</template>

<script setup lang="ts">
import {Navigation, Pagination} from "swiper";

interface slidesProps {
  url : string,
  bg? : string
}

const slides = ref([
    'https://www.insight.com/content/dam/insight-web/en_US/store/apple/apple-multiproduct-hero-full-suite.png',
    'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/12/samsung-galaxy-z-fold-4-and-flip-4-on-a-gray-table-top.jpg',
    'https://i0.wp.com/corecart.pk/wp-content/uploads/2022/09/Weekly-Deals-1.png?resize=1920%2C770&ssl=1',
    'https://s.yimg.com/uu/api/res/1.2/TZlmYGcdTgvvhRzZYpLQdQ--~B/aD0xMTgxO3c9MjEwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-05/6b97e730-d049-11ec-b6e7-4207e89c1d68.cf.jpg'
])

</script>
