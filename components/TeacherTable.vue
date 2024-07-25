<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Avatar</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Subject</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="teacher in teachers" :key="teacher.id" class="hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap">{{ teacher.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <font-awesome class="h-10 w-10 rounded-full" icon="user" />
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ teacher.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ teacher.subject }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <NuxtLink :to="`/teachers/${teacher.id}`" class="text-blue-600 hover:text-blue-900">Edit</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { data: teachers } = await useFetch("/api/teachers/search");
</script>
