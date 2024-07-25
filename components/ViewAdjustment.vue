<template>
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="p-6">
                <!-- Adjustment Details -->
                <div class="mb-4">
                    <h2 class="text-2xl font-bold mb-2">Adjustment Details</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-gray-600">ID:</p>
                            <p class="font-medium">{{ adjustment?.id }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Day:</p>
                            <p class="font-medium">{{ getDayName(adjustment!.day) }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Lecture:</p>
                            <p class="font-medium">{{ adjustment?.lecture }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Session:</p>
                            <p class="font-medium">{{ adjustment?.session }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Absent Teacher:</p>
                            <p class="font-medium">{{ adjustment?.absentTeacher.name }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Substitute Teacher:</p>
                            <p class="font-medium">{{ adjustment?.substituteTeacher.name }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Created At:</p>
                            <p class="font-medium">{{ formatDate(adjustment?.createdAt) }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Updated At:</p>
                            <p class="font-medium">{{ formatDate(adjustment?.updatedAt) }}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Delete Button -->
                <div class="flex justify-end">
                    <button @click="handleDelete" type="button" class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        Delete Adjustment
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();
const { data: adjustment } = await useFetch(`/api/adjustments/${route.params.id}`)
if (!adjustment.value?.id) {
    throw createError({
        statusCode: 404,
        message: 'Adjustment not found'
    });
}


const handleDelete = async () => {
    const { data: deletedAdjustment } = await useFetch(`/api/adjustments`, {
        method: 'delete',
        body: {
            adjustmentId: adjustment.value?.id
        }
    });

    if (deletedAdjustment.value?.id) {
        alert(`Adjustment ${deletedAdjustment.value.id} deleted`)
    }
};
</script>
