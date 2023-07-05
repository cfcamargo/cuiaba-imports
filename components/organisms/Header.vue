<template>
    <header class="w-full h-[120px] bg-black">
      <Container>
        <div class="w-full h-[80px] flex items-center justify-between px-4">
            <NuxtLink to="/">
                <Logo :icon_width="80"/>
            </NuxtLink>

            <div>
              <Search />
            </div>

            <button @click="$emit('tootlgeShowAside')">
              <List color="white" :size="32" />
            </button>
        </div>
      </Container>
      <nav class="w-full h-[40px] flex justify-center items-center bg-zinc-800">
          <ul class="flex items-center gap-10 font-light">
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink>
                  Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 hover:text-zinc-50 cursor-pointer">
              <NuxtLink>
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
      </nav>
    </header>
</template>

<script setup lang="ts">
import { List } from 'lucide-vue-next';

defineEmits(['tootlgeShowAside'])

</script>
