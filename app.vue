<template>
    <NuxtPage />
</template>

<script setup lang="ts">
import 'animate.css';

onMounted(() => {
  // Verifica se o script do GTM já foi adicionado
  if (!document.querySelector('script#gtm-script')) {
    // Cria o script do GTM
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-M9QPGK6R';
    document.head.appendChild(script);

    // Inicializa o dataLayer e dispara o evento gtm.js
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  }

  // Opcional: Adicionar o iframe via noscript para GTM nos navegadores sem JavaScript
  if (!document.querySelector('noscript#gtm-noscript')) {
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    noscript.id = 'gtm-noscript';
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-M9QPGK6R';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
});
</script>
