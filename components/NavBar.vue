<template>
    <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">LDESK</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><NuxtLink href="about">about</NuxtLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
</template>