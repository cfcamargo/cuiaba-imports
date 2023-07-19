<template>
  <Container>
    <div class="flex flex-col gap-6 w-full py-10 xs:px-2 md:px-0">
      <h4 class="text-xl font-bold">Produtos</h4>
      <div>
        <ul class="grid xs:grid-cols-1 md:grid-cols-4 gap-16">
          <li v-for="(product, index) in props.products">
            <ProductCard :product="product"/>
          </li>
        </ul>

      </div>
    </div>


  </Container>
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";

  const paginateIndex = ref(0)

  const props = defineProps({
    products : Array<Array<productProps>>
  })

</script>

