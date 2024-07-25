<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
      <div class="p-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <font-awesome icon="user" class="text-4xl" />
          </div>
          <div>
            <div class="text-lg font-semibold">{{ teacher.name }}</div>
            <span
              class="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs mt-1">{{ teacher.subject }}</span>
          </div>
        </div>
        <div class="mt-4 flex justify-end space-x-4">
          <button @click="editTeacher" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
            <font-awesome icon="edit" />
          </button>
          <button @click="deleteTeacher" class="p-2 rounded-full bg-red-400 hover:bg-red-700 focus:outline-none">
            <font-awesome icon="trash" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="adjustmentTable">
    <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <table class="w-full table-fixed">
        <thead>
          <tr class="bg-gray-100">
            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
            <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr>
            <td class="py-4 px-6 border-b border-gray-200">John Doe</td>
            <td class="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
            <td class="py-4 px-6 border-b border-gray-200">555-555-5555</td>
            <td class="py-4 px-6 border-b border-gray-200">
              <span class="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<style scoped>
/* Scoped styles */
</style>


<script lang="ts" setup>
const route = useRoute();
const { data: teacher } = useFetch(`/api/teachers/search/id?teacherId=${route.params.id}`)

const { data: adjustments } = useFetch(`/api/adjustments`)

function editTeacher() {
  const newName = prompt('enter the new name for the techer (Leave blank for no change)')
  const newSub = prompt('enter the new Subject (Leave blank for no change)')
  const xc = route.params.id
  const url = useFetch('/api/teachers',
    {
      method: 'put',
      body: {
        teacherId: xc,
        teacherName: newName || teacher.name,
        teacherSubject: newSub || teacher.subject
      }

    }
  )
}

function deleteTeacher() {
  const t = route.params.id
  const url = useFetch('/api/teachers',

    {
      method: 'delete',
      body: {
        teacherId: t
      }
    }
  )
}

// function getAdjustementsForTeacher(){
//   let adat = [];
//   for (let index = 0; index < adjustments.value?.length; index++) {
    
//   }

// }

</script>

<style></style>