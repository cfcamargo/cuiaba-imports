<template>
  <NuxtLink :to="`/shop/${1}`" class="flex flex-col gap-2 px-4 py-2" :class="!props.slider ? 'shadow rounded border border-transparent hover:border-blue-600' : ''">
    <img :src="props.product?.cover" class="max-w-[200px] mx-auto"/>
    <div class="flex flex-col leading-relaxed items-center justify-center text-center">
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
