<template>
  <div class="overflow-x-auto p-4">
    <h1 class="text-3xl font-bold text-center mb-6">Schedules</h1>
    <div class="flex justify-end mb-4 gap-2">
      <NuxtLink to="/schedules/create" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
        Add Schedule
      </NuxtLink>
      <button @click="exportSchedulesToPdf" class="inline-flex items-center px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Export to PDF
      </button>
    </div>
    <table id="schedules-table" class="min-w-full bg-white border-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Day</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Teacher</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Lecture</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Session</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="schedule in schedules" :key="schedule.id" class="hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ getDayName(schedule.day - 1) }}</td>
          <td class="px-6 py-4 whitespace-nowrap"><NuxtLink :to="`/teachers/${schedule.teacherId}`">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {{ schedule.teacher.name }}
            </span>
          </NuxtLink></td>
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.lecture }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.session }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <button @click="deletedSchedule(schedule.id)" class="text-red-600 hover:text-red-900">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Delete
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const { data: schedules, refresh } = await useFetch("/api/schedules");

async function deletedSchedule(scheduleId: number) {
  const { data: deletedSchedule } = await useFetch("/api/schedules", {
    method: 'delete',
    body: {
      scheduleId: scheduleId,
    }
  });
  
  if (deletedSchedule.value?.id) {
    alert(`Schedule ${deletedSchedule.value.id} deleted`);
    await refresh();
  }
}

async function exportSchedulesToPdf() {
  const doc = new jsPDF
  autoTable(doc, { html: '#schedules-table' })
  const formattedDate = formatDate(new Date());
  doc.save(`schedules-${formattedDate}.pdf`);
}
</script>
