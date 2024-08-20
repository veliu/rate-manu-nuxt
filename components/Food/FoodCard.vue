<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/20/solid";
import type { Food } from "~/types/Food";

defineProps<{
  food: Food;
}>();
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center">
        <StarIcon
          v-for="rating in [1, 2, 3, 4, 5]"
          :key="rating"
          :class="[
            food.averageRating <= rating ? 'text-yellow-400' : 'text-gray-200',
            'h-5 w-5 flex-shrink-0',
          ]"
          aria-hidden="true"
        />
      </div>
    </template>

    <NuxtLink :to="'/food/' + food.id">
      <div
        class="aspect-h-2 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
      >
        <NuxtImg
          :src="food.image ? food.image : `/pizza.jpeg`"
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
    </NuxtLink>

    <template #footer>
      <div class="flex flex-1 flex-col space-y-2 p-4">
        <h3 class="text-white text-xl font-medium text-gray-900">
          {{ food.name }}
        </h3>
        <div class="flex flex-1 flex-col justify-end">
          <p class="text-sm italic text-gray-500">
            {{ food.description }}
          </p>
        </div>
      </div>
    </template>
  </UCard>
</template>
