<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Create Adjustment</h1>

    <!-- Form for Creating Adjustment -->
    <form @submit.prevent="handleSubmit">
      <!-- Day Selector (Example: Dropdown) -->
      <div class="mb-4">
        <label for="day" class="block text-sm font-medium text-gray-700">Day</label>
        <select v-model="adjustmentDay" id="day" name="day" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="7">Sunday</option>
        </select>
      </div>

      <!-- Lecture Input -->
      <div class="mb-4">
        <label for="lecture" class="block text-sm font-medium text-gray-700">Lecture</label>
        <input v-model="adjustmentLecture" type="text" id="lecture" name="lecture" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>

      <!-- Session Input -->
      <div class="mb-4">
        <label for="session" class="block text-sm font-medium text-gray-700">Session</label>
        <input v-model="adjustmentSession" type="text" id="session" name="session" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>

      <!-- Absent Teacher Selector (Example: Dropdown) -->
      <div class="mb-4">
        <label for="absentTeacher" class="block text-sm font-medium text-gray-700">Absent Teacher</label>
        <select v-model="absentTeacherId" id="absentTeacher" name="absentTeacher" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>
        </select>
      </div>

      <!-- Substitute Teacher Selector (Example: Dropdown) -->
      <div class="mb-4">
        <label for="substituteTeacher" class="block text-sm font-medium text-gray-700">Substitute Teacher</label>
        <select v-model="substituteTeacherId" id="substituteTeacher" name="substituteTeacher" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>
        </select>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Create Adjustment
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const adjustmentDay = ref('');
const adjustmentLecture = ref('');
const adjustmentSession = ref('');
const absentTeacherId = ref('');
const substituteTeacherId = ref('');

const { data: teachers } = await useFetch('/api/teachers/search');

// Form submission handling
const handleSubmit = async () => {
  const { data: adjustment } = await useFetch('/api/adjustments', {
      method: 'post',
      body: {
          adjustmentDay: adjustmentDay,
          adjustmentLecture: adjustmentLecture,
          adjustmentSession: adjustmentSession,
          absentTeacherId: absentTeacherId,
          substituteTeacherId: substituteTeacherId
      }
  })

  alert(`Adjustment ${adjustment.value.id} created`)
};
</script>
  