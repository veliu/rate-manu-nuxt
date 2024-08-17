<script setup lang="ts"></script>
<template>
  <Header />
  <div>Hello and welcome</div>
  <NuxtLink to="/food">
    <div>
      <button
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-400 px-8 py-3 text-base font-medium text-black hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
        @click="navigateTo('/food')"
      >
        Go to food
      </button>
    </div>
  </NuxtLink>
</template>
