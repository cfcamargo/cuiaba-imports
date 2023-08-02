<template>
  <div>
    <div ref="animationContainer"></div>
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
    path: '/imagenotfound.json' // Caminho para o arquivo de animação
  })
})


</script>
