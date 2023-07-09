<template>
  <Header/>
  <Container>
    <div class="grid grid-cols-2 gap-10 py-10">
        <div class="flex justify-center">
          <img :src="props.product?.cover" class="h-[450px]">
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col py-10">
            <h3 class="font-bold text-2xl w-full max-w-[400px]">{{props.product.title}}</h3>
            <span>{{props.product.sub}}</span>
          </div>

          <div>
            <span>Selecione a versão</span>
            <div class="flex gap-4 py-4">
              <button type="button" @click="changeVariant(variant)" class="rounded-full px-4 py-1 border border-gray-900 font-semibold cursor-pointer" v-for="variant in props.product?.variants"  :class="[variant === variantSelected ? 'bg-gray-800 text-gray-200' : '' , variantSelected === '' && invalidVariant ? 'border-red-500' : '']">
                {{variant}}
              </button>
            </div>
            <transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
              <span class="text-xs text-red-500" v-show="invalidVariant"> Selecione uma versão para reservar </span>
            </transition>

            <button class="flex gap-2 rounded-full px-4 py-2 bg-green-500 text-white items-center w-[250px] justify-center mt-10" @click="handleReserveProduct">
                <WhatsappIcon :icon_height="20" :icon_width="20" :color="'text-white'"/>
                <span>Reservar</span>
            </button>

          </div>
        </div>
    </div>
    <div class="flex flex-col px-10">
      <div class="flex flex-col gap-8">
        <h4 class="font-semibold text-lg">Descrição</h4>
        <p>
          {{ props.product.description}}
        </p>
      </div>
      <div class="px-10 py-10" v-if="props.product?.videoURL">
        <div>
          <iframe
              class="w-full aspect-video"
              :src="props.product.videoURL"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Container>

</template>

<script setup lang="ts">

import {PropType} from "@vue/runtime-core";
import productProps from "~/models/product";


const props = defineProps({
  product : Object as PropType<productProps>
})

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
    if(variantSelected.value !== ''){
      invalidVariant.value = false
      openReserveLink()
    } else {
      invalidVariant.value = true
    }
}


function openReserveLink(){
    const message = `Olá! eu gostaria de reservar um ${props.product?.title} na versão de ${variantSelected.value}`
    const url = `https://api.whatsapp.com/send?phone=5567984513860&text=${message}`

    window.open(url, '_blank')
}

</script>