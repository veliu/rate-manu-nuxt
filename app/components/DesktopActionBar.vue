<script setup lang="ts">
const emit = defineEmits(["toggle:create-form", "toggle:filter-form"]);
</script>

<template>
  <div class="p-4 flex flex-row items-center gap-4">
    <UButton
      label="New"
      icon="i-heroicons-document-plus"
      @click="emit('toggle:create-form')"
    />
    <UButton
      label="Sorting"
      icon="i-heroicons-adjustments-horizontal"
      @click="emit('toggle:filter-form')"
    />
  </div>
</template>
