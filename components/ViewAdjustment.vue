<template>
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-4">Edit Adjustment</h2>
                
                <!-- Form Section -->
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Day -->
                        <div>
                            <label for="day" class="block text-sm font-medium text-gray-700">Day</label>
                            <select v-model="formData.adjustmentDay" id="day" name="day" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option v-for="(day, index) in daysOfWeek" :key="index" :value="index" class="text-gray-900">{{ day }}</option>
                            </select>
                        </div>

                        <!-- Lecture -->
                        <div>
                            <label for="lecture" class="block text-sm font-medium text-gray-700">Lecture</label>
                            <input v-model="formData.adjustmentLecture" type="text" id="lecture" name="lecture" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>

                        <!-- Session -->
                        <div>
                            <label for="session" class="block text-sm font-medium text-gray-700">Session</label>
                            <input v-model="formData.adjustmentSession" type="text" id="session" name="session" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        </div>

                        <!-- Absent Teacher -->
                        <div>
                            <label for="absentTeacher" class="block text-sm font-medium text-gray-700">Absent Teacher</label>
                            <select v-model="formData.absentTeacherId" id="absentTeacher" name="absentTeacher" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id" class="text-gray-900">{{ teacher.name }}</option>
                            </select>
                        </div>

                        <!-- Substitute Teacher -->
                        <div>
                            <label for="substituteTeacher" class="block text-sm font-medium text-gray-700">Substitute Teacher</label>
                            <select v-model="formData.substituteTeacherId" id="substituteTeacher" name="substituteTeacher" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                <option v-for="teacher in teachers" :key="teacher.id" :value="teacher.id" class="text-gray-900">{{ teacher.name }}</option>
                            </select>
                        </div>
                    </div>

                    <!-- Save Changes Button -->
                    <div class="flex justify-end">
                        <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Save Changes
                        </button>
                    </div>
                </form>

                <!-- Delete Button -->
                <div class="mt-4 flex justify-end">
                    <button @click="handleDelete" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Delete Adjustment
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Fetch adjustment data
const route = useRoute();
const { data: adjustment } = await useFetch(`/api/adjustments/${route.params.id}`);
if (!adjustment.value?.id) {
    throw createError({
        statusCode: 404,
        message: 'Adjustment not found'
    });
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const formData = ref({
    adjustmentId: adjustment.value?.id,
    adjustmentDay: adjustment.value?.day ?? 0,
    adjustmentLecture: adjustment.value?.lecture ?? '',
    adjustmentSession: adjustment.value?.session ?? '',
    absentTeacherId: adjustment.value?.absentTeacherId,
    substituteTeacherId: adjustment.value?.substituteTeacherId,
});

const { data: teachers } = await useFetch('/api/teachers/search');

async function handleSubmit() {
    const { data: updatedAdjustment } = await useFetch("/api/adjustments", {
        method: 'put',
        body: formData.value
    });

    if (updatedAdjustment.value?.id) {
        alert(`Adjustment ${updatedAdjustment.value.id} updated successfully`);
    }
};

async function handleDelete () {
    const { data: deletedAdjustment } = await useFetch("/api/adjustments", {
        method: 'delete',
        body: {
            adjustmentId: formData.value.adjustmentId
        }
    });

    if (deletedAdjustment.value?.id) {
        alert(`Adjustment ${deletedAdjustment.value.id} deleted`);
    }
};
</script>
