<template>
  <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ID
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Subject
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="teacher in teachers">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <font-awesome class="h-10 w-10 rounded-full" icon="user" />
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">
                {{ teacher.id }}
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">{{ teacher.name }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {{ teacher.subject }}
          </span>
        </td>
        <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
          <NuxtLink :href="`/teachers/${teacher.id}`" class="text-indigo-600 hover:text-indigo-900">Edit</NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const { data: teachers } = await useFetch("/api/teachers/search");

</script>

<style></style>