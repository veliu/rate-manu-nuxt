<script setup lang="ts">
import type { Food } from "~/types/ApiTypes";

defineProps<{
  foodCollection: Food[];
}>();
</script>

<template>
  <div class="">
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      />
      <div
        v-if="foodCollection"
        class="group relative flex flex-col gap-8 overflow-hidden rounded-lg md:grid md:grid-cols-3"
      >
        <FoodCard v-for="food in foodCollection" :key="food.id" :food="food" />
      </div>
    </div>
  </div>
</template>
