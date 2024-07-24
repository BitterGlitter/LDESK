<template  
>
<div class="m-4 sm:m-12 md:p-24 lg:px-54 lg:py-12 grid grid-cols-3 lg:flex lg:gap-8"> 

  <div v-for="card in cards" class="card bg-base-100 w-96 shadow-xl ">
    <NuxtLink :href=card.href>
    <div class="card-body items-center text-center">
      <figure class="px-4 py-4 text-4xl">
        <font-awesome :icon=card.icon />
      </figure>
      <h2 class="card-title">{{ card.title }}</h2>
    </div>
  </NuxtLink> 
  </div>
</div>
</template>

<script lang="ts" setup>
const cards = [{
  title: "Teachers",
  href: '/teachers',
  icon: 'users'
},
{
  title: "Adjustments",
  href: '/adjustments',
  icon: 'calendar-plus'
},
{
  title: "Schedule",
  href: 'schedule',
  icon: 'calendar-days'
}]

</script>

<style>

</style>