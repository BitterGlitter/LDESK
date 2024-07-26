<template>
    <div class="p-6 bg-gray-50 min-h-screen">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <div v-if="schedule.length > 0" class="p-4 border-b border-gray-200">
                <h1 class="text-2xl font-semibold text-gray-800">{{ schedule[0].teacher.name }}'s Schedule</h1>
                <div class="flex justify-end mb-4 gap-2">
                    <button @click="exportScheduleToPdf" class="inline-flex items-center px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Export to PDF
                    </button>
                </div>
            </div>
            <div v-if="schedule.length > 0" class="overflow-x-auto">
                <table id="schedule-table" class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Day
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Lecture
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Session
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Created At
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Updated At
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="item in sortedSchedule" :key="item.id">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {{ item.id }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ getDayName[item.day - 1] }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ item.lecture }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ item.session }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ formatDate(item.createdAt) }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ formatDate(item.updatedAt) }}
                            </td>
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
            <div v-else-if="schedule.length === 0" class="p-4 text-gray-500">
                <p>No schedule available.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const route = useRoute();
const teacherId = route.params.id;

async function deletedSchedule(scheduleId) {
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

const { data: schedule } = await useFetch(`/api/schedules/teacher?teacherId=${teacherId}`);
const sortedSchedule = schedule.value.slice().sort((a, b) => a.day - b.day);

async function exportScheduleToPdf() {
    const doc = new jsPDF
    autoTable(doc, { html: '#schedule-table' })
    const formattedDate = formatDate(new Date());
    doc.save(`schedule-${schedule.value[0].teacher.name}-${formattedDate}.pdf`);
}
</script>

