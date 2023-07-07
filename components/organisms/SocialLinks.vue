<template>
  <div :class="flexDirection">
    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <Instagram color="white" :size="20" />
    </a>

    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <Facebook color="white" :size="20"/>
    </a>
    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <WhatsappIcon :color="'text-white'" :icon_width="20" :icon_height="20"/>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Instagram, Facebook } from 'lucide-vue-next'

const props = defineProps({
  direction : String
})

const flexDirection  = computed(()=>{
  if(!props.direction){
    return 'flex gap-2 w-full justify-center absolute bottom-10 transform left-0 right-0'
  } else {
    return 'flex flex-col gap-2 items-center'
  }
})

</script>
