<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  useHead({
    htmlAttrs: {
      'data-theme': 'cupcake'
    },
  })
</script>