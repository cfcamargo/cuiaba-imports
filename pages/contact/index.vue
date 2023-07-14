<template>
  <NuxtLayout name="contact">
      <div class="w-full h-screen bg-zinc-900 flex items-center justify-center">
          <div class="rounded xs:px-2 md:px-4 shadow bg-gray-950 text-gray-200 py-20 w-full max-w-[450px] relative">
            <div class="flex flex-col gap-6 justify-center items-center">
                <div class="rounded-full px-2 py-2 bg-gray-900 w-36 h-36 flex items-center justify-center">
                    <Logo icon_width="90"/>
                </div>

                <div class="w-full">
                  <h2 class="text-center">Cuiabá Imports</h2>
                  <ul class="mt-6 w-full space-y-2">
                    <li>
                      <a class="px-2 py-2 bg-gray-900 hover:bg-gray-800 w-full flex gap-4 justify-center items-center rounded">
                        <WhatsappIcon :icon_width="20"/>
                        <span>Whatsapp</span>
                      </a>
                    </li>

                    <li>
                      <a class="px-2 py-2 bg-gray-900 hover:bg-gray-800 w-full flex gap-4 justify-center items-center rounded">
                        <Instagram color="white" :size="22" />
                        <span>Instagram</span>
                      </a>
                    </li>

                    <li>
                      <a class="px-2 py-2 bg-gray-900 hover:bg-gray-800 w-full flex gap-4 justify-center items-center rounded">
                        <Facebook color="white" :size="22" />
                        <span>Facebook</span>
                      </a>
                    </li>

                    <li>
                      <a class="px-2 py-2 bg-gray-900 hover:bg-gray-800 w-full flex gap-4 justify-center items-center rounded">
                        <Pin color="white" :size="22" />
                        <span>Localização</span>
                      </a>
                    </li>
                  </ul>
                </div>

            </div>
            <div class="absolute top-4 left-4 hover:border hover:border-white cursor-pointer px-2 py-1 rounded">
              <NuxtLink to="/" class="flex items-center gap-2">
                <ArrowLeftCircle color="white" :size="20"/>
                <span class="text-xs text-white">Voltar ao site</span>
              </NuxtLink>
            </div>
          </div>
      </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Instagram, Pin, Facebook, ArrowLeftCircle } from 'lucide-vue-next'

</script>
