<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
        <div class="p-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <font-awesome icon="user" class="text-4xl"/>
            </div>
            <div>
              <div class="text-lg font-semibold">{{ teacher.name }}</div>
              <span class="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs mt-1">{{teacher.subject}}</span>
            </div>
          </div>
          <div class="mt-4 flex justify-end space-x-4">
            <button @click="editTeacher" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <i class="fas fa-edit text-gray-600"></i>
            </button>
            <button @click="deleteTeacher" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
              <i class="fas fa-trash text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>


<style scoped>
/* Scoped styles */
</style>


<script lang="ts" setup>
const route = useRoute();
const {data: teacher} = useFetch( `/api/teachers/search/id?teacherId=${route.params.id}`)

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

</script>

<style></style>