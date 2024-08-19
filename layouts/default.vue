<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Food List",
      icon: "i-heroicons-numbered-list",
      to: "/food",
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
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800"
    />
    <slot />
  </div>
</template>
