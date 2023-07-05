<template>
  <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
    <aside v-show="props.show" class="h-full w-1/3 bg-zinc-800 absolute top-0 right-0">
        <button @click="$emit('tootlgeShowAside')" class="w-full flex justify-end px-4 py-4">
          <X color="white" :size="25"/>
        </button>

        <ul class="flex flex-col gap-4 items-end px-4 py-8 w-full">
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Celulares</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Notebooks</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Acessórios</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Cameras</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Apple</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Xiaomi</li>
          <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400">Samsung</li>
        </ul>

    </aside>
  </transition>
</template>

<script setup>
import { X } from 'lucide-vue-next'

defineEmits(['tootlgeShowAside'])

 const props = defineProps({
   show : Boolean
 })





</script>
