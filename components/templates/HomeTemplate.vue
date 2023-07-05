<template>
  <Header @tootlgeShowAside="tootlgeShowAside"/>
  <main class="overflow-y-hidden overscroll-y-none w-full">
    <Aside :show="data" @tootlgeShowAside="tootlgeShowAside"/>
  </main>
</template>

<script setup lang="ts">

const data = ref(false)

function tootlgeShowAside(){
    data.value = !data.value
}

</script>