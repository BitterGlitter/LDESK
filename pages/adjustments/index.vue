<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Adjustments</h1>

    <div class="flex justify-end mb-4">
      <NuxtLink to="/adjustments/create" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
        Create Adjustment
      </NuxtLink>
    </div>

    <AdjustmentsTable />
  </div>
</template>
