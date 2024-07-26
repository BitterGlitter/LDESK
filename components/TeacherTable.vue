<template>
  <div class="overflow-x-auto">
    <div class="flex justify-end mb-4 gap-2">
      <NuxtLink to="/teachers/create" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
        Add Teacher
      </NuxtLink>
      <button @click="exportTeachersToPdf" class="inline-flex items-center px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Export to PDF
      </button>
    </div>
    <table id="teachers-table" class="min-w-full bg-white border-gray-200">
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
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <NuxtLink :to="`/teachers/${teacher.id}`" class="text-blue-600 hover:text-blue-900">Details</NuxtLink>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

async function exportTeachersToPdf() {
  const doc = new jsPDF
  autoTable(doc, { html: '#teachers-table' })
  const formattedDate = formatDate(new Date());
  doc.save(`teachers-${formattedDate}.pdf`);
}
const { data: teachers } = await useFetch("/api/teachers/search");
</script>
