<script setup lang="ts">
import type { Reactive } from "vue";
import type { FoodCollection } from "~/types/FoodCollection";

defineProps<{
  foodCollection: Reactive<FoodCollection> | null;
}>();
</script>

<template>
  <div class="">
    <div class="mx-auto max-w-2xl py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div
        class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      ></div>
      <div
        v-if="foodCollection"
        class="group relative flex flex-col gap-8 overflow-hidden rounded-lg md:grid md:grid-cols-3"
      >
        <FoodCard
          v-for="food in foodCollection.items"
          :key="food.id"
          :food="food"
        />
      </div>
    </div>
  </div>
</template>
