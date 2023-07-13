<template>
  <ProductShowTemplate :product="product" />
</template>

<script setup lang="ts">
  import productProps from "~/models/Product";

  const route = useRoute()
  const productID = route.params.id


  const product = ref<productProps>({
    title : 'Celular Apple Iphone 14 Pro Roxo Profundo',
    sub: 'Apple A16 Bionic',
    cover: 'https://m.media-amazon.com/images/I/518bzP8VW1L._AC_UF1000,1000_QL80_.jpg',
    variants : ['128gb', '256gb', '512gb', '1tb'],
    description : 'O Apple iPhone 14 Pro é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização, representando um dos melhores dispositivos móveis já feitos. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2556x1179 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 Pro são muitas e todas top de linha. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet, além de conectividade Wi-fi e GPS presente no aparelho. Tem também leitor multimídia, videoconferência, e bluetooth. Enfatizamos a excelente memória interna de 1000 GB mas sem a possibilidade de expansão.\n' +
        'A excelência deste Apple iPhone 14 Pro é completada por uma câmera de 48 megapixels que permite tirar fotos fantásticas com uma resolução de 8000x6000 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. A espessura de apenas 7.9 milímetros torna o Apple iPhone 14 Pro um dos telefones mais finos que existem.',
    videoURL : 'https://www.youtube.com/watch?v=FT3ODSg1GFE&t=15s'
  })
</script>
