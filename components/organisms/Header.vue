<template>
    <header class="w-full el-col-xs-push-24 h-[120px] bg-black fixed top-0 left-0 right-0 z-30">
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
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent" :class="{ 'border-b-white': isActive('home') }">
              <NuxtLink to="/">
                  Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent"  :class="{ 'border-b-white': isActive('shop') }">
              <NuxtLink to="/shop" @click="resetFilters">
                Loja
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent"  :class="{ 'border-b-white': isActive('assistence') }">
              <NuxtLink to="/assistence">
                Assistência Técnica
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent"  :class="{ 'border-b-white': isActive('about') }">
              <NuxtLink to="/about">
                Sobre
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent">
              <NuxtLink to="/contact">
                Contato
              </NuxtLink>
            </li>
          </ul>

          <div class="w-full xs:flex md:hidden">
            <SearchMobile />
          </div>
      </nav>
    </header>
    <Aside :show="asideShow" @toogleShowAside="toogleShowAside"/>
</template>

<script setup lang="ts">
import { List } from 'lucide-vue-next';
import { useProductStore } from  '@/store/products'
import SearchMobile from "~/components/molecules/SearchMobile.vue";

const store = useProductStore()

const asideShow = ref(false)

function toogleShowAside(){
  asideShow.value = !asideShow.value
}

async function resetFilters(){
    if(store.$getIsFiltered){
      store.resetFilters()
      await store.fetchProdutcs()
    }

}

const route = useRoute();

const isActive = (routeName: string) => {
  // Verifica se a rota desejada é "home" e se a rota atual é "index" (ou seja, "/")
  if (routeName === 'home' && route.name === 'index') {
    return true;
  }
  // Para outras rotas, verifica se o nome da rota é o mesmo que o fornecido
  return route.name === routeName;
};
</script>
