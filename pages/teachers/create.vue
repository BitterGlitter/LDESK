<template>
  <div>
  <div class="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl items-center">
  <form action="">
    <div class="mb-6">
      <label for="name" class="block text-gray-800 font-bold">Name:</label>
      <input type="text" name="name" id="name" placeholder="Name" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
    </div>
    <div>
      <label for="subject" class="block text-gray-800 font-bold">Subject:</label>
      <input type="text" name="subject" id="subject" placeholder="Subject" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
    </div>
    <button @click="addTeacher" class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Add Teacher</button>
  </form>
</div>
  </div>
</template>

<script lang="ts" setup>
   function addTeacher() {
    const teacherName = document.getElementById('Name')
    const teacherSubject = document.getElementById('Subject')

    const newTeacher = useFetch(`/api/teachers`,
      {
        method: 'post',
        body: {
          teacherName: teacherName,
          teacherSubject: teacherSubject
        }
      }
     )
   }
</script>

<style>

</style>