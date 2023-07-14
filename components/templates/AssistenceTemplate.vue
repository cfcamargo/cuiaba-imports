<template>
    <div class="w-ful h-[calc(100vh_-_120px)] flex justify-center items-center">
          <div class="flex flex-col justify-center items-center">
            <h2 class="text-center">Esta página está em desenvolvimento</h2>
            <div>
              <div ref="animationContainer"></div>
            </div>
          </div>
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
      path: '/indevelopment.json' // Caminho para o arquivo de animação
    })
  })
</script>
