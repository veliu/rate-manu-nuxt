<script setup lang="ts">
import type { FoodRating } from "~/types/FoodRating";
import { StarIcon } from "@heroicons/vue/20/solid";
import type { Food } from "~/types/Food";

const props = defineProps<{
  food: Food;
}>();
</script>
<template>
  <div
    class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
  >
    <NuxtImg
      src="/pizza.jpeg"
      class="h-full w-full object-cover object-center sm:h-full sm:w-full"
    />
  </div>
  <div class="flex flex-1 flex-col space-y-2 p-4">
    <h3 class="text-sm font-medium text-gray-900"></h3>
    <p class="text-sm text-gray-500">{{ food.name }}</p>
    <div class="flex flex-1 flex-col justify-end">
      <p class="text-sm italic text-gray-500">{{ food.description }}</p>
    </div>
    <div class="mt-3 flex flex-col items-center">
      <p class="sr-only">1 out of 5 stars</p>
      <div class="flex items-center">
        <StarIcon
          v-for="ratings in [0, 1, 2, 3, 4]"
          :key="ratings"
          :class="[
            0 > ratings ? 'text-yellow-400' : 'text-gray-200',
            'h-5 w-5 flex-shrink-0',
          ]"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
