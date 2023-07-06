<template>
  <div class="flex gap-2 w-full justify-center absolute bottom-10 transform left-0 right-0">
    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <Instagram color="white" :size="20" />
    </a>

    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <Facebook color="white" :size="20"/>
    </a>
    <a class="rounded-full px-2 py-2 bg-zinc-700 cursor-pointer hover:bg-zinc-800">
      <MessagesSquare color="white" :size="20"/>
    </a>
  </div>
</template>

<script setup>
import { Instagram, Facebook, MessagesSquare} from 'lucide-vue-next'

</script>
