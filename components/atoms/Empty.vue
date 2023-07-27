<template>
  <div class="flex flex-col items-center">
    <div ref="animationContainer"></div>
    <p class="text-xs text-gray-200 text-center mt-4">Nenhum produto encontrado</p>
  </div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web'

const animationContainer = ref(null)

onMounted(() => {
  lottie.loadAnimation({
    container: animationContainer.value, // use `.value` with `ref()`
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/empty.json' // Caminho para o arquivo de animação
  })
})


</script>
