<template  
>
<div class="flex-1 overflow-auto p-4 mt-0 md:mt-20"> 
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
   
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/3 sm:w-1/3 w-full" v-for="card in cards">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          <font-awesome :icon='`${card.icon }`' class="text-blue text-3xl"  />
          <NuxtLink :to="`${card.href}`"><div><h2 class="title-font font-medium text-3xl text-gray-900"> {{ card.title }}</h2></div></NuxtLink>
          <p class="leading-relaxed"></p>
        </div>
      </div>
    </div>
  </div>
</section>
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
  href: 'schedules',
  icon: 'calendar-days'
}]

</script>

<style>

</style>