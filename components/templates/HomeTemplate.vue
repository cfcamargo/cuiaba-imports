<template>
  <Header/>
  <main class="w-full">
    <HomeBanner />
    <section id="mas-vendidos">
      <HomeProductsSlider />
    </section>
    <section id="assistencia-tecnica">
      <TecnicalCelResum />
    </section>
    <section id="about">
      <AboutHome />
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">


const data = ref(false)

</script>