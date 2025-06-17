<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/20/solid";

defineProps<{
  userRating: number;
}>();
</script>

<template>
  <div class="flex items-center">
    <div class="flex items-center">
      <StarIcon
        v-for="rating in [1, 2, 3, 4, 5]"
        :key="rating"
        :class="[
          userRating <= rating ? 'text-yellow-400' : 'text-gray-300',
          'h-5 w-5 flex-shrink-0',
        ]"
        aria-hidden="true"
      />
    </div>
    <p class="sr-only">0 out of 5 stars</p>
  </div>
</template>
