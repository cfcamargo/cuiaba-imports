<template>
  <Container>
    <div>
      <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-10 py-10 pt-[120px]">
        <div class="flex justify-center">
          <div v-if="props.product?.cover === ''" class="mx-auto h-[450px] max-w-[300px]">
            <ImageNotFound />
          </div>
          <img :src="props.product?.cover" class="h-[450px]" v-else>
        </div>
        <div class="flex flex-col xs:px-10 md:px-0">
          <div class="flex flex-col py-10">
            <h3 class="font-bold text-2xl w-full max-w-[400px]">{{props.product.title}}</h3>
            <span v-if="props.product?.sub">{{props.product.sub}}</span>
          </div>

          <div>
            <span>Selecione a versão</span>
            <div class="flex gap-4 py-4" v-if="props.product?.variants[0] !== ''">
              <button type="button" @click="changeVariant(variant)" class="rounded-full px-4 py-1 border border-gray-900 font-semibold cursor-pointer" v-for="variant in props.product?.variants"  :class="[variant === variantSelected ? 'bg-gray-800 text-gray-200' : '' , variantSelected === '' && invalidVariant ? 'border-red-500' : '']">
                {{variant}}
              </button>
            </div>
            <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
              <span class="text-xs text-red-500" v-show="invalidVariant">Selecione uma versão para reservar </span>
            </transition>

            <button class="flex gap-2 rounded-full px-4 py-2 bg-green-500 text-white items-center w-[250px] justify-center mt-10" @click="handleReserveProduct">
              <WhatsappIcon :icon_height="20" :icon_width="20" :color="'text-white'"/>
              <span>Reservar</span>
            </button>

          </div>
        </div>
      </div>
      <div class="flex flex-col px-10">
        <div class="flex flex-col gap-8 pb-10">
          <h4 class="font-semibold text-lg">Descrição</h4>
          <p>
            {{ props.product.description }}
          </p>
        </div>
        <div class="pt-10 pb-20" v-if="props.product?.videoURL">
          <div class="w-full aspect-video h-full" ref="youtubeContainer"></div>
        </div>
      </div>
    </div>
  </Container>

</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import productProps from "~/models/Product";
import { useProductStore } from '@/store/products'

const props = defineProps({
  product : Object as PropType<productProps>,
})

const store = useProductStore()

const youtubeContainer = ref(null)
let player = null

const videoID = getYouTubeVideoId(props.product?.videoURL);

const variantSelected = ref<String>('')
const invalidVariant = ref<Boolean>(false)

function changeVariant(variant : string){
    invalidVariant.value = false
    if( variant === variantSelected.value ){
      variantSelected.value = ''
    } else {
      variantSelected.value = variant
    }
}

function handleReserveProduct(){
  if(props.product?.variants[0] !== '') {
    if (variantSelected.value !== '') {
      invalidVariant.value = false
      openReserveLink()
    } else {
      invalidVariant.value = true
    }
  } else{
    openReserveLink()
  }
}

function getYouTubeVideoId(url: string | undefined): String{
  if(url){
    const regex = /[?&]v=([^&#]*)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
  else {
    return ''
  }
}


function openReserveLink(){
    const message = `Olá! eu gostaria de reservar um ${props.product?.title} na versão de ${variantSelected.value}`
    const url = `https://api.whatsapp.com/send?phone=5567984513860&text=${message}`

    window.open(url, '_blank')
}



onMounted(() => {
  if(props.product?.videoURL){
    const onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(youtubeContainer.value, {
        videoId: videoID,
        playerVars: {
          autoplay: 0,
          controls: 1
        }
      })
    }

    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady()
    } else {
      const youtubeScript = document.createElement('script')
      youtubeScript.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(youtubeScript)

      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
    }
  }
})


useHead({
  title : `Cuiabá Imports | ${props.product?.title}`
})

</script>
