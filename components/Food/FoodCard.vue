<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/20/solid";
import type { Food } from "~/types/ApiTypes";
import { useFood } from "~/composables/useFood";

const props = defineProps<{
  food: Food;
}>();

const { createdBy, assignedToGroup } = await useFood(props.food);
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-row justify-between">
        <div class="flex items-center">
          <StarIcon
            v-for="rating in [1, 2, 3, 4, 5]"
            :key="rating"
            :class="[
              food.averageRating <= rating
                ? 'text-yellow-400'
                : 'text-gray-200',
              'h-5 w-5 flex-shrink-0',
            ]"
            aria-hidden="true"
          />
        </div>
        <div>
          <UBadge color="black" variant="solid">{{ assignedToGroup }}</UBadge>
        </div>
      </div>
    </template>
    <div
      class="aspect-h-2 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
    >
      <NuxtLink :to="'/food/' + food.id">
        <NuxtImg
          :src="food.image ? food.image : `/pizza.jpeg`"
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-1 flex-col space-y-2 py-4">
      <h3 class="text-white text-xl font-medium">
        {{ food.name }}
      </h3>
      <div class="flex flex-1 flex-col justify-end">
        <p class="text-sm italic text-gray-500">
          {{ food.description }}
        </p>
      </div>
    </div>
    <template #footer>
      <div>
        <p>Created by {{ createdBy }}</p>
      </div>
    </template>
  </UCard>
</template>
