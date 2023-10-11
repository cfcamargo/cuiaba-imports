<template>
  <a class="flex items-center px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 gap-2" href="http://bit.ly/3IMA32v" target="_blank">
      <WhatsappIcon :icon_width="20" :icon_height="20" :color="'text-white'"/>
      <span class="text-white">{{ text ? text : 'Comprar Agora'}}</span>
  </a>
</template>

<script setup lang="ts">
  defineProps({
    text : String,
  })
</script>
