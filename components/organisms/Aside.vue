<template>
    <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <aside v-show="props.show" class="h-full w-2/3 md:w-1/5 bg-zinc-800 fixed top-0 right-0 bottom-0 z-30 max-h-screen overflow-auto z-50">
          <button @click="$emit('toogleShowAside')" class="w-full flex justify-end px-4 py-4 sticky">
            <X color="white" :size="25"/>
          </button>

          <ul class="xs:flex md:hidden flex-col items-end gap-8 px-4 font-light ">
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/shop">
                Loja
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/assistence">
                Assistência Técnica
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/about">
                Sobre
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/contact">
                Contato
              </NuxtLink>
            </li>
          </ul>

          <div class="mt-6 w-full xs:flex justify-end px-4 border-t-2 border-gray-700 md:hidden">
            <h2 class="text-zinc-300 mt-4 text-2xl">Categorias</h2>
          </div>

          <ul class="flex flex-col gap-8 items-end px-4 py-8 w-full">
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Celulares</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Notebooks</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Acessórios</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Cameras</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Apple</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Xiaomi</li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">Samsung</li>
          </ul>

      </aside>
    </transition>
</template>

<script setup>
import { X } from 'lucide-vue-next'

const emits = defineEmits(['toogleShowAside'])

 const props = defineProps({
   show : Boolean
 })

</script>
