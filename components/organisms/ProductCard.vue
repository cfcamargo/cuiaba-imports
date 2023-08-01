<template>
  <NuxtLink :to="`/shop/${props.product?.id}`" class="flex flex-col justify-center gap-2 px-4 py-2 h-[400px]" :class="!props.slider ? 'shadow rounded border border-transparent hover:border-blue-600' : ''">
    <div class="h-[240px] flex justify-center items-center">
      <img :src="props.product?.cover" class="w-full max-h-full mx-auto object-cover"/>
    </div>
    <div class="flex flex-col leading-relaxed items-center justify-center text-center h-[80px]">
      <h4>{{props.product.title}}</h4>
      <span class="text-xs">{{props.product.sub}}</span>
    </div>
    <div class="w-full h-[20px]">
        <div class="h-full flex justify-center items-center gap-1" v-if="props.product?.qtd > 0">
            <Check class="w-8"/>
            <span class="text-xs text-green-500">Disponível</span>
        </div>
      <div class="h-full flex items-center justify-center gap-1" v-else>
        <Delivery class="w-10"/>
        <span class="text-xs text-center text-yellow-500">Disponível sob encomenda</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import productProps from "~/models/Product";
import Check from "~/components/atoms/Check.vue";
import Delivery from "~/components/atoms/Delivery.vue";

const props = defineProps({
  slider : { type: Boolean },
  product : Object as PropType<productProps>
})
</script>
