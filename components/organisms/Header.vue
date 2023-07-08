<template>
    <header class="w-full h-[120px] bg-black">
      <Container>
        <div class="w-full h-[80px] flex items-center justify-between px-4">
            <NuxtLink to="/">
                <Logo :icon_width="80"/>
            </NuxtLink>

            <div class="xs:hidden md:flex">
              <Search />
            </div>

            <button @click="toogleShowAside" class="flex gap-2 items-center">
              <span class="text-white uppercase xs:hidden md:inline">Categorias</span>
              <List color="white" :size="32" />
            </button>
        </div>
      </Container>
      <nav class="w-full h-[40px] flex justify-center items-center xs:bg-zinc-900 md:bg-zinc-800">
          <ul class="xs:hidden md:flex items-center gap-10 font-light ">
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink to="/">
                  Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink to="shop">
                Loja
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink>
                Assistência Técnica
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink>
                Sobre
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink>
                Contato
              </NuxtLink>
            </li>
          </ul>
          <div class="xs:flex justify-center md:hidden">
            <Search />
          </div>
      </nav>
    </header>
    <Aside :show="asideShow" @toogleShowAside="toogleShowAside"/>
</template>

<script setup lang="ts">
import { List } from 'lucide-vue-next';
import {Events} from "@vue/runtime-dom";
const asideShow = ref(false)

function toogleShowAside(){
  asideShow.value = !asideShow.value
}


</script>
