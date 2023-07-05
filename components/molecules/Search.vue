<template>
  <div class="bg-zinc-900 rounded-full">
    <form @submit="submit" class="flex gap-2 items-center px-2 py-1">
      <input name="search" id="search" placeholder="Digite para buscar" v-bind="searchTerm" class="bg-transparent px-2 py-2 placeholder:text-zinc-600 focus:outline-none text-white text-xs"/>
      <label for="search" @click="submit" class="px-2 border-l border-zinc-600">
        <Search color="white" :size="20"/>
      </label>
    </form>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next';

const searchTerm = ref<String>('')

function submit(){
  console.log('to pesquisando')
}

</script>
