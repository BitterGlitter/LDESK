<template>
  <div class="flex max-h-screen items-center justify-center">
    <div class="w-auto py-6 px-8 h-auto mt-20 bg-white rounded shadow-xl items-center">
      <!-- <form action="/teachers"> -->
        <div class="mb-4">
          <label for="Teacher" class="block text-sm font-medium text-gray-700">Teacher</label>
          <select v-model="teacherId" id="Teacher" name="Teacher" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="day" class="block text-sm font-medium text-gray-700">Day</label>
          <select v-model="teacherDay" id="day" name="day" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
            <option value="7">Sunday</option>
          </select>
        </div>
      <div>
        <label for="subject" class="block text-gray-800 font-bold">Lecture:</label>
        <input type="text" v-model="teacherLecture" id="subject" placeholder="Example: 1st"
          class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>
      <div>
        <label for="subject" class="block text-gray-800 font-bold">Session (Class and Section):</label>
        <input type="text" v-model="teacherSession" id="subject" placeholder="Example: 1st A "
          class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
      </div>
      <button @click="addSchedule()"
        class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Add
        to Schedule</button>
   <!-- </form> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const teacherId = ref('');
const teacherDay = ref('');
const teacherLecture = ref('');
const teacherSession = ref('');

const {data: teachers} = await  useFetch(`/api/teachers/search`);



async function addSchedule() {
  const { data: newSchedule } = await useFetch(`/api/schedules`,
    {
      method: 'post',
      body: {
        teacherId: teacherId.value,
        teacherDay: teacherDay.value,
        teacherLecture: teacherLecture.value,
        teacherSession: teacherSession.value,
      }
    }
  )
  if (newSchedule.value?.id) {
    alert(`Schedule ${newSchedule.value.id} added`)
  }
  await navigateTo('/schedules')
}

</script>

<style></style>