<template>
<header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div class="px-4">
        <div class="flex items-center justify-between">
            <div class="flex shrink-0">
                <a aria-current="page" class="flex items-center" href="/">
                    <p class="text-2xl font-bold font-sans ">LDESK</p>
                </a>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            </div>
            <div class="flex items-center justify-end gap-3">
                <NuxtLink class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900  transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/teachers">Teachers</NuxtLink>
                    <NuxtLink class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900  transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/adjustments">Adjustments</NuxtLink>
                    <NuxtLink class="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900  transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                    href="/schedule">Schedule</NuxtLink>
            </div>
        </div>
    </div>
</header>
</template>