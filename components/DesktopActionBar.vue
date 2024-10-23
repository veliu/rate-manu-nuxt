<script setup lang="ts">
const emit = defineEmits(["toggle:create-form", "toggle:filter-form"]);
</script>

<template>
  <div class="bg-black shadow-md p-4 flex flex-row items-center gap-4">
    <UButton
      label="New"
      icon="i-heroicons-plus"
      @click="emit('toggle:create-form')"
    />
    <UButton
      label="Sorting"
      icon="i-heroicons-chart-pie"
      @click="emit('toggle:filter-form')"
    />
  </div>
</template>
