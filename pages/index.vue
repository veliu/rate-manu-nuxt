<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { FoodCollection, SearchCriteria } from "~/types/ApiTypes";

definePageMeta({
  middleware: "auth",
});

const { $api } = useNuxtApp();

const defaultSearchCriteria: SearchCriteria = {
  offset: 0,
  limit: 500,
  sorting: [
    {propertyName: 'averageRating', direction: 'desc'},
    {propertyName: 'name', direction: 'asc'}
  ]
} 
const { data } = await $api.food.search(defaultSearchCriteria);

const foodCollection = data.value as FoodCollection;

const openCreateFoodForm = ref(false);
const openFilterForm = ref(false);
</script>

<template>
  <DefaultHeader />

  <div class="flex flex-row gap-2">
    <UButton
      class="justify-center"
      icon="i-heroicons-plus"
      label="New Food"
      @click="openCreateFoodForm = true"
    />
    <UButton
      class="justify-center"
      icon="i-heroicons-chart-pie"
      label="Filter and Sorting"
      @click="openFilterForm = true"
    />
  </div>

  <USlideover v-model="openCreateFoodForm">
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="openCreateFoodForm = false"
      />
      <FoodCreateForm />
    </div>
  </USlideover>

  <USlideover v-model="openFilterForm">
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="openFilterForm = false"
      />
      <p>Test</p>
    </div>
  </USlideover>

  <FoodListing :food-collection="foodCollection" />
</template>
