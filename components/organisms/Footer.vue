<template>
  <footer class="w-full bg-zinc-950 py-20">
    <Container>
      <div class="flex xs:flex-col md:flex-row gap-4 justify-between">
          <div class="flex flex-col xs:items-center md:items-start gap-10">
            <div>
              <a href="http://bit.ly/3IMA32v" target="_blank" class="flex gap-2 items-center">
                <WhatsappIcon :icon_height="20" :icon_width="20" :color="'text-zinc-200'" />
                <span class="text-zinc-200">67 9 8451-3860</span>
              </a>
            </div>

            <div class="flex flex-col gap-2">
              <h4 class="font-bold text-zinc-200 text-lg">Horário de Funcionamento</h4>
              <ul class="flex flex-col xs:items-center md:items-start gap-2 text-zinc-200 font-light text-xs">
                <li>Segunda-Feira : 08:00 as 18:00hs</li>
                <li>Terça-Feira : 08:00 as 18:00hs</li>
                <li>Quarta-Feira : 08:00 as 18:00hs</li>
                <li>Quinta-Feira : 08:00 as 18:00hs</li>
                <li>Sexta-Feira : 08:00 as 18:00hs</li>
                <li>Sabado : 08:00 as 18:00hs</li>
                <li>Domingo : 08:00 as 12:00hs</li>
              </ul>
          </div>
            </div>
          <div>
          <ul class="flex flex-col items-center gap-4 font-light xs:mt-10 md:mt-0">
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-l-4 hover:px-2 border-zinc-600">
              <NuxtLink>
                Home
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-l-4 hover:px-2 border-zinc-600">
              <NuxtLink to="/shop">
                Loja
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-l-4 hover:px-2 border-zinc-600">
              <NuxtLink>
                Assistência Técnica
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-l-4 hover:px-2 border-zinc-600">
              <NuxtLink>
                Sobre
              </NuxtLink>
            </li>
            <li class="text-zinc-200 font-normal hover:font-bold hover:text-zinc-400 hover:border-l-4 hover:px-2 border-zinc-600">
              <NuxtLink>
                Contato
              </NuxtLink>
            </li>
          </ul>
        </div>
          <div class="xs:hidden md:flex justify-end">
            <SocialLinks direction="col"/>
          </div>
        </div>

        <div class="flex xs:flex-col md:flex-row justify-between items-center mt-20">
          <div class="xs:text-center md:text-left xs:pb-16 md:pb-0">
            <p class="text-zinc-200 text-xs">Todos os direitos reservados</p>
            <span class="text-zinc-200 text-xs">Cuiabá Imports</span>
          </div>
          <Logo :icon_width="150" />
        </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">

</script>

