<template>
  <Header @tootlgeShowAside="tootlgeShowAside"/>
  <main class="w-full">
    <Aside :show="data" @tootlgeShowAside="tootlgeShowAside"/>
    <HomeBanner />
  </main>
</template>

<script setup lang="ts">

const data = ref(false)

function tootlgeShowAside(){
    data.value = !data.value
}

</script>