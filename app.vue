<template>
    <NuxtPage />
</template>

<script setup lang="ts">
import 'animate.css';
import { useProductStore } from '@/store/products'

const store = useProductStore();
</script>
