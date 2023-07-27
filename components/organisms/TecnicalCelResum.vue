<template>
  <div class="w-full bg-tecnical-cel bg-cover bg-center">
    <div class="w-ful h-full bg-black/80 py-8">
      <Container>
          <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4 py-10 xs:px-4 md:px-10">
            <h4 class="xs:text-3xl md:text-7xl font-bold text-zinc-100">
              Assitência Técnica
            </h4>
            <div class="flex xs:flex-col md:flex-row gap-8">
              <div class="xs:w-full md:w-[200px] flex flex-col gap-2 items-center px-4 py-2 rounded bg-zinc-900 justify-center">
                <Smartphone :size="50" color="white"/>
                <span class="text-white text-center">Peças Originais</span>
              </div>

              <div class="xs:w-full md:w-[200px] flex flex-col gap-2 items-center px-4 py-2 rounded bg-zinc-900 justify-center">
                <Laptop :size="50" color="white"/>
                <span class="text-white text-center">Atendimento Completo</span>
              </div>

              <div class="xs:w-full md:w-[200px] flex flex-col gap-2 items-center px-4 py-2 rounded bg-zinc-900 justify-center">
                <Tablet :size="50" color="white"/>
                <span class="text-white text-center">Atendimento Especializado</span>
              </div>
            </div>
          </div>
          <p class="mt-10 xs:px-4 md:px-10 text-justify text-zinc-100">Nossa assistência técnica especializada oferece serviços de alta qualidade para atender às suas necessidades tecnológicas. Contamos com técnicos especializados que possuem conhecimento aprofundado em diversas marcas e modelos, garantindo um serviço preciso e eficiente. Utilizamos apenas peças originais, garantindo a durabilidade e o desempenho dos seus dispositivos. Seja para reparos, substituição de componentes ou atualizações de software, nossa equipe está pronta para oferecer soluções confiáveis e rápidas, garantindo que você possa aproveitar ao máximo seu dispositivo. Valorizamos a transparência e o atendimento ao cliente, proporcionando uma experiência tranquila e satisfatória. Confie em nós para cuidar do seu equipamento tecnológico com a expertise e a qualidade que ele merece.</p>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Smartphone, Laptop, Tablet} from 'lucide-vue-next'

</script>
