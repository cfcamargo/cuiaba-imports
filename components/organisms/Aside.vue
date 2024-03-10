<template>
    <transition enter-active-class="animate__animated animate__fadeInRight" leave-active-class="animate__animated animate__fadeOutRight">
      <aside v-show="props.show" class="h-full w-2/3 md:w-1/5 bg-zinc-800 fixed top-0 right-0 bottom-0  max-h-screen overflow-auto z-50">
          <button @click="$emit('toogleShowAside')" class="w-full flex justify-end px-4 py-4 sticky">
            <X color="white" :size="25"/>
          </button>

          <ul class="flex flex-col gap-4 items-end px-4 py-8 w-full">
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600 cursor-pointer" @click="fetchProductByFilter('category', category.value)" v-for="category in categories">{{ category.name}}</li>
          </ul>

          <ul class="xs:flex md:hidden flex-col items-end gap-8 px-4 font-light border-t py-6">
            <li class="text-zinc-200 font-bold hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-bold hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/shop">
                Loja
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-bold hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/assistence">
                Assistência Técnica
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-bold hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/about">
                Sobre
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-bold hover:font-bold hover:text-zinc-400 hover:border-r-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/contact">
                Contato
              </NuxtLink>
            </li>
          </ul>
      </aside>
    </transition>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { useProductStore } from '@/store/products'

const router = useRouter()

const store= useProductStore()
const emits = defineEmits(['toogleShowAside'])

async function fetchProductByFilter(key:string, value :string){
    store.resetFilters()
    store.setFilter(key, value)
    emits('toogleShowAside')
    await router.push({name: 'shop'})
    await store.fetchProdutcs()

    await nextTick()

    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
}

 const props = defineProps({
   show : Boolean
 })


const categories = [
  {name: 'Celulares', value: 'Celular'},
  {name: 'Acessórios', value: 'Acessorio'},
  {name: 'Carregadores', value: 'Carregador'},
  {name: 'Tablets', value: 'Tablet'},
  {name: 'Notebooks', value: 'Notebook'},
  {name: 'Smartwatches', value: 'Smartwatch'},
  {name: 'Receptores', value: 'Receptor'},
  {name: 'Caixas de Som', value: 'Caixa de Som'},
  {name: 'Teclados', value: 'Teclado'},
  {name: 'Fones de Ouvido', value: 'Fone de Ouvido'},
  {name: 'Televisores', value: 'Televisores'},
  {name: 'Roteadores', value: 'Roteadores'},
  {name: 'Repetidores', value: 'Repetidores'},
  {name: 'Suportes', value: 'Suportes'},
  {name: 'Amplificadores', value: 'Amplificadores'},
  {name: 'Tabacaria', value: 'Tabacaria'},
  {name: 'Alto Falantes', value: 'Alto Falante'},
  {name: 'Drones', value: 'Drone'},
  {name: 'Óculos VR', value: 'Óculos VR'},
]

</script>
