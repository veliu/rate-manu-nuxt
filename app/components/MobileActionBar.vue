<script setup lang="ts">
const emit = defineEmits(["toggle:create-form", "toggle:filter-form"]);
</script>

<template>
  <div
    class="z-10 backdrop-blur-sm fixed bottom-0 left-0 right-0 dark:bg-black/30 shadow-md p-4 flex flex-row justify-around items-center"
  >
    <UButton
      :square="true"
      size="xl"
      icon="i-heroicons-adjustments-horizontal"
      @click="emit('toggle:filter-form')"
    />
    <UButton
      :square="true"
      size="xl"
      icon="i-heroicons-document-plus"
      @click="emit('toggle:create-form')"
    />
  </div>
</template>
