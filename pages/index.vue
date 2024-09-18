<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { FoodCollection, SearchCriteria, Sorting } from "~/types/ApiTypes";
import { type Ref, ref, computed, watch } from "vue";

definePageMeta({
  middleware: "auth",
});

const { $api } = useNuxtApp();

const itemsPerPage: Ref<number> = ref(9);
const page: Ref<number> = ref(1);

const buildSearchCriteria = (): SearchCriteria => {
  const offset = (page.value - 1) * itemsPerPage.value;

  const sorting: Sorting[] = [
    { propertyName: "averageRating", direction: "asc" },
    { propertyName: "name", direction: "asc" },
  ];

  return {
    offset,
    limit: itemsPerPage.value,
    sorting,
  };
};

const fetchFoodCollection = async (): Promise<FoodCollection> => {
  const searchCriteria: SearchCriteria = buildSearchCriteria();
  const { data } = await $api.food.search(searchCriteria);
  return data.value as FoodCollection;
};

const foodCollection: Ref<FoodCollection> = ref(await fetchFoodCollection());

const totalCount = computed<number>(() => foodCollection.value?.count || 0);

const openCreateFoodForm: Ref<boolean> = ref(false);
const openFilterForm: Ref<boolean> = ref(false);

watch(page, async () => {
  foodCollection.value = await fetchFoodCollection();
});
</script>

<template>
  <DefaultHeader />
  <div class="grid grid-cols-1 gap-4 mb-8">
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
    <UPagination
      v-model="page"
      class="justify-end"
      :page-count="itemsPerPage"
      :total="totalCount"
      :active-button="{ variant: 'outline' }"
      :inactive-button="{ color: 'gray' }"
      size="sm"
    />
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
  </div>
</template>
