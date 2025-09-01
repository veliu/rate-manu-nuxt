<script setup lang="ts">
defineProps<{ imageUrls: string[] | undefined | null }>();
</script>

<template>
  <UCarousel
    v-if="imageUrls"
    v-slot="{ item }"
    :items="imageUrls"
    class="w-full max-w-xs mx-auto"
    arrows
    dots
  >
    <NuxtImg :src="item" class="rounded-lg" />
  </UCarousel>
</template>
