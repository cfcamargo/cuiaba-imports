<template>
  <NuxtLink :to="`/shop/${props.product?.id}`" class="flex flex-col justify-center gap-2 px-4 py-2 h-[380px]" :class="!props.slider ? 'shadow rounded border border-transparent hover:border-blue-600' : ''">
    <div class="h-[240px]">
      <img :src="props.product?.cover" class="h-full mx-auto object-cover"/>
    </div>
    <div class="flex flex-col leading-relaxed items-center justify-center text-center h-[80px]">
      <h4>{{props.product.title}}</h4>
      <span class="text-xs">{{props.product.sub}}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import productProps from "~/models/Product";

const props = defineProps({
  slider : { type: Boolean },
  product : Object as PropType<productProps>
})
</script>
