<template>
  <div class="overflow-x-auto p-4">
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
        <tr v-for="schedule in schedules" :key="schedule.id" class="hover:bg-gray-100">
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <font-awesome class="h-10 w-10 rounded-full" icon="user" />
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.teacher.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ schedule.teacher.subject }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <NuxtLink @click="deleteScheduleFromList" class="text-red-600 hover:text-red-900">Delete</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

const { data: schedules } = await useFetch("/api/schedules");

async function deleteScheduleFromList() {
  // const { data: deletedSchedule } = await useFetch("/api/adjustments", {
  //       method: 'delete',
  //       body: {
  //           scheduleId: .value.scheduleId
  //       }
  //   });

  //   if (deletedAdjustment.value?.id) {
  //       alert(`Adjustment ${deletedSchedule.value.id} deleted`);
  //   }
}
</script>
