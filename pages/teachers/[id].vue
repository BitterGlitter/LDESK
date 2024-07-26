<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
      <div class="p-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <font-awesome icon="user" class="text-4xl" />
          </div>
          <div>
            <div class="text-lg font-semibold">{{ teacher?.name }}</div>
            <span
            class="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-xs mt-1">{{ teacher?.subject }}</span>
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
</template>


<script lang="ts" setup>
const route = useRoute();
const { data: teacher } = useFetch(`/api/teachers/search/id?teacherId=${route.params.id}`)

async function editTeacher() {
  const newName = prompt('Enter the new name for the techer (Leave blank for no change)')
  const newSub = prompt('Enter the new Subject (Leave blank for no change)')
  const teacherId = route.params.id
  const editedTeacher = await useFetch('/api/teachers',
  {
    method: 'put',
    body: {
      teacherId: teacherId,
      teacherName: newName || teacher.value?.name,
      teacherSubject: newSub || teacher.value?.subject
    }
    
  }
  )
  await window.location.reload();
}

function deleteTeacher() {
  const teacherId = route.params.id
  const url = useFetch('/api/teachers',
  
  {
    method: 'delete',
    body: {
      teacherId: teacherId
    }
  }
  )
}
</script>

<style></style>