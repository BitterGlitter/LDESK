<template>
  <div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="teacher in teachers">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle h-12 w-12">
                    <img src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ teacher.name }}</div>
                </div>
              </div>
            </td>
            <td>
              <span class="badge badge-ghost badge-sm">{{ teacher.subject }}</span>
            </td>
            <td>Purple</td>
            <th>
              <NuxtLink :to="`/teachers/${teacher.id}`"><button class="btn btn-ghost btn-xs">Edit</button></NuxtLink>
            </th>
          </tr>
        </tbody>
        <!-- foot -->
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: teachers } = await useFetch("/api/teachers/search");

</script>

<style></style>