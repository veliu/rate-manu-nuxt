<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
  ],
  [
    {
      label: "Account",
      icon: "i-heroicons-user",
      to: "/account",
    },
  ],
];
</script>

<template>
  <div>
    <header class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <UDashboardToolbar>
        <UNavigationMenu
          :items="links"
          highlight
          class="flex-1 border-b border-gray-200 dark:border-gray-800"
        />
      </UDashboardToolbar>
    </header>
    <main class="mb-20 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
