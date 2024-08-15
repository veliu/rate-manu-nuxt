<script setup lang="ts">
import type { FoodRating } from "~/types/FoodRating";
import { StarIcon } from "@heroicons/vue/20/solid";
import type { FoodCollection } from "~/types/FoodCollection";
import type { Reactive, Ref } from "vue";
import Card from "~/components/Food/Card.vue";

const props = defineProps<{
  foodCollection: Reactive<FoodCollection> | null;
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
          v-if="foodCollection"
          v-for="food in foodCollection.items"
          :key="food.id"
          class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <Card :food="food" />
        </div>
      </div>
    </div>
  </div>
</template>
