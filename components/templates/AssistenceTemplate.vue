<template>
    <div class="w-ful h-[calc(100vh_-_120px)] flex justify-center items-center">
      <Container>
          <div class="w-full h-full grid grid-cols-2 justify-center items-center">
              <div class="flex flex-col gap-4">
                <h2 class="text-4xl font-bold text-gray-950">Assistência Técnica Especializada</h2>
                <p class="text-gray-900">"Possuimos uma assistência técnica especializada em celulares, tablets e notebooks. Nossa equipe altamente qualificada oferece soluções rápidas e confiáveis para os seus dispositivos. Priorizamos a satisfação do cliente, garantindo excelência e transparência em cada atendimento. Conte com a nossa expertise para superar seus problemas técnicos. Entre em contato hoje mesmo."</p>
              </div>
              <div class="w-[500px] ml-auto">
                <div ref="animationContainer"></div>
              </div>
          </div>
      </Container>
    </div>

  <Container>
      <div class="w-full grid grid-cols-2 gap-10 py-20">
        <div>
          <img src="/assistence.jpg" class="w-full object-cover object-center"/>
        </div>
        <div class="flex justify-end w-full items-center">
          <p class="text-right leading-relaxed">
            Sabemos que seus celulares, tablets e notebooks são mais do que aparelhos, são seus parceiros do dia a dia. Então, quando eles começam a dar sinais de cansaço, quem vai ao resgate? Nós! Com uma equipe altamente qualificada, nós transformamos esses pequenos contratempos tecnológicos em meros obstáculos, facilmente superados. Aqui, a satisfação do cliente, a excelência e a transparência não são apenas palavras de ordem, são o nosso jeito de ser! Então, o que está esperando? Vamos colocar esses dispositivos de volta na pista. Entre em contato conosco hoje mesmo e experimente nossos serviços!"
          </p>
        </div>
      </div>


    <div class="w-full grid grid-cols-2 gap-10 py-20">
      <div class="flex w-full items-center">
        <p class="text-left leading-relaxed">
          "Você é um fã de produtos Apple? Ótimo, nós também somos! Nossa assistência técnica é especializada em celulares, tablets e notebooks da Maçã. Sabemos que cada iPhone, iPad e MacBook têm suas peculiaridades e merecem um cuidado especial. Nossa equipe, não só altamente qualificada, mas também entusiasta da Apple, está pronta para trazer seu dispositivo de volta à vida com precisão e uma pitada de diversão. Afinal, acreditamos que o serviço técnico não precisa ser uma dor de cabeça. Deixe-nos transformar esse percalço em uma experiência positiva. Pronto para trazer seu Apple de volta à ação? Entre em contato conosco hoje mesmo e sinta a diferença de um serviço feito por quem entende e ama o que faz!"
        </p>
      </div>
      <div>
        <img src="/assistence2.png" class="w-full object-cover object-center"/>
      </div>
    </div>
  </Container>
  <div>

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
      path: '/assistence.json' // Caminho para o arquivo de animação
    })
  })
</script>
