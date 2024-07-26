<template>
  <div class="container px-4 py-8">
    <div class="flex justify-end mb-4 gap-2">
      <NuxtLink to="/adjustments/create" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
        Create Adjustment
      </NuxtLink>
      <button @click="exportAdjustmentsToPdf" class="inline-flex items-center px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Export to PDF
      </button>
    </div>
    <div class="overflow-x-auto">
      <table id="adjustments-table" class="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-100 text-gray-800">
          <tr>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Day</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Lecture</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Session</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Absent Teacher</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Substitute Teacher</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Created At</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Updated At</th>
            <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="adjustment in adjustments" :key="adjustment.id" class="hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap">{{ adjustment.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ getDayName(adjustment.day) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ adjustment.lecture }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ adjustment.session }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <NuxtLink :to="`/teachers/${adjustment.absentTeacherId}`">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {{ adjustment.absentTeacher.name }}
                </span>
              </NuxtLink>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <NuxtLink :to="`/teachers/${adjustment.substituteTeacherId}`">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {{ adjustment.substituteTeacher.name }}
                </span>
              </NuxtLink>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(adjustment.createdAt) }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ formatDate(adjustment.updatedAt) }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-center">
              <NuxtLink :to="`/adjustments/${adjustment.id}`" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">Details</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const { data: adjustments } = await useFetch('/api/adjustments');

async function exportAdjustmentsToPdf() {
  const doc = new jsPDF
  autoTable(doc, { html: '#adjustments-table' })
  const formattedDate = formatDate(new Date());
  doc.save(`adjustments-${formattedDate}.pdf`);
}
</script>