<template>
    <header class="w-full el-col-xs-push-24 h-[120px] bg-black fixed top-0 left-0 right-0 z-30">
      <Container>
        <div class="w-full h-[80px] flex items-center justify-between px-4">
            <NuxtLink to="/">
                <SecondaryLogo />
            </NuxtLink>

            <div class="xs:hidden md:flex">
              <Search />
            </div>

            <button @click="toogleShowAside" class="xs:flex md:hidden gap-2 items-center">
              <span class="text-white uppercase xs:hidden md:inline">Categorias</span>
              <List color="white" :size="32" />
            </button>
        </div>
      </Container>
      <nav class="w-full h-[40px] flex justify-center items-center xs:bg-zinc-900 md:bg-zinc-800 relative">
          <ul class="xs:hidden md:flex items-center gap-10 font-light ">
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent">
              <button type="button" class="flex items-center gap-2" @click="submenu = !submenu">
                  <List color="white" :size="32" />
                  <span>Categorias</span>
              </button>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer border-b-2 border-transparent"  :class="{ 'border-b-white': isActive('shop') }">
              <NuxtLink to="/" @click="resetFilters">
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

          <transition enterActiveClass="animate__animated animate__fadeInDown" leaveActiveClass="animate__animated animate__fadeOutUp">
            <div class="absolute w-full h-[350px] bg-gray-100 shadow top-[40px]" v-if="submenu">
              <Container>
                <ul class="grid grid-cols-4 gap-4 p-8">
                    <li v-for="(category, index) in categories" @click="fetchProductByFilter('category',category.value)" :key="index" class="cursor-pointer hover:text-gray-500 hover:underline text-zinc-950" >
                      {{  category.name }}
                    </li>
                </ul>
              </Container>
            </div>
          </transition>
      </nav>
    </header>
    <Aside :show="asideShow" @toogleShowAside="toogleShowAside"/>
</template>

<script setup lang="ts">
import { List } from 'lucide-vue-next';
import { useProductStore } from  '@/store/products'
import SearchMobile from "~/components/molecules/SearchMobile.vue";
import Categories  from '@/models/Categories'

const store = useProductStore()
const asideShow = ref(false)
const submenu = ref(false)

const router = useRouter()

const categories = Categories

function toogleShowAside(){
  asideShow.value = !asideShow.value
}

async function resetFilters(){
    if(store.$getIsFiltered){
      store.resetFilters()
      await store.fetchProdutcs()
    }

}

async function fetchProductByFilter(key:string, value :string){
    submenu.value = false
    await router.push({ path: '/shop', query: { [key]: value } });

    store.resetFilters()
    store.setFilter(key, value)

    await nextTick()

    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }

    await store.fetchProdutcs()

}

const route = useRoute();

const isActive = (routeName: string) => {
  // Verifica se a rota desejada é "home" e se a rota atual é "index" (ou seja, "/")
  if (routeName === 'shop' && route.name === 'index') {
    return true;
  }
  // Para outras rotas, verifica se o nome da rota é o mesmo que o fornecido
  return route.name === routeName;
};
</script>
