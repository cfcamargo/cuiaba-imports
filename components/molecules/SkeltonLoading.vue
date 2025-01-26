<template>
  <div class="py-8">
    <div class="flex flex-col gap-4 items-center space-x-4">
      <USkeleton class="bg-zinc-600 h-32 w-32"/>
      <div class="space-y-2">
        <USkeleton class="bg-zinc-600 h-4 w-[300px]" />
        <USkeleton class="bg-zinc-600 h-4 w-[300px]" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const loading = ref(true)

</script>
