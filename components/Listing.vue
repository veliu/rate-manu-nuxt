<script setup lang="ts">
import type { FoodRating } from "~/types/FoodRating";
import { StarIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{
  foodRatings: FoodRating[];
}>();
</script>

<template>
  <AddButton />
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <div
          v-for="rating in foodRatings"
          :key="rating.id"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <RatingCard :food-rating="rating" />
        </div>
      </div>
    </div>
  </div>
</template>
