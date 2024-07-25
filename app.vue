<template>
  <div>
    <NuxtLayout>
      <NavBar />
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