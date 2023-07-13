<template>
  <Container>
    <div class="flex flex-col gap-6 w-full py-10">
      <h4 class="text-xl font-bold">Produtos</h4>


      <div>
        <ul class="grid grid-cols-4 gap-16">
          <li v-for="(product, index) in 16">
            <ProductCard :product="produtc"/>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";

  const produtc = ref<productProps>({
    cover : 'https://th.bing.com/th/id/R.61f9cb45589aeaf348326bf28ca72708?rik=9cl%2bi%2fjEI%2f%2bIrw&pid=ImgRaw&r=0',
    title : 'Celular Apple Iphone 14 Pro Roxo Profundo',
    sub : 'A16 Bionic | 128gb',
    description : 'djkajkldjkasdjadskads',
    variants : ['128', '256']
  })
</script>

<style scoped>

</style>