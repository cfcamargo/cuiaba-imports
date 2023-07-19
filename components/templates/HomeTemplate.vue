<template>
    <section id="home_banner">
      <HomeBanner />
    </section>
    <section id="mas-vendidos">
      <HomeProductsSlider />
    </section>
    <section id="assistencia-tecnica">
      <TecnicalCelResum />
    </section>
    <section id="about">
      <AboutHome />
    </section>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/products'

const store = useProductStore()


onMounted(() => {
  store.fetchProdutcs()
})

</script>