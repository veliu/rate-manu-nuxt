<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { FoodCollection, SearchCriteria } from "~/types/ApiTypes";
import { ref, computed, watch } from "vue";

definePageMeta({
  middleware: "auth",
});

const pageLoaded = ref(false);
const { $api } = useNuxtApp();

const itemsPerPage = ref(9);
const page = ref(1);
const openCreateFoodForm = ref(false);
const openFilterForm = ref(false);

const offset = computed(() => (page.value - 1) * itemsPerPage.value);

const searchCriteria = ref<SearchCriteria>({
  offset: offset.value,
  limit: itemsPerPage.value,
  sorting: [{ propertyName: "averageRating", direction: "asc" }],
});

const fetchFoodCollection = async (): Promise<FoodCollection> => {
  const { data } = await $api.food.search(searchCriteria.value);
  return data.value as FoodCollection;
};

const foodCollection = ref(await fetchFoodCollection());
const totalCount = computed(() => foodCollection.value?.count || 0);

watch(
  searchCriteria,
  async () => {
    foodCollection.value = await fetchFoodCollection();
  },
  { deep: true },
);

watch([page, itemsPerPage], () => {
  searchCriteria.value.offset = offset.value;
  searchCriteria.value.limit = itemsPerPage.value;
});

onMounted(() => {
  pageLoaded.value = true;
});
</script>

<template>
  <div v-if="pageLoaded">
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
      <div class="flex justify-end">
        <UPagination
          v-model="page"
          :page-count="itemsPerPage"
          :total="totalCount"
          :active-button="{ variant: 'outline' }"
          :inactive-button="{ color: 'gray' }"
          size="sm"
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
          <FilterAndSorting v-model="searchCriteria" />
        </div>
      </USlideover>
      <FoodListing :food-collection="foodCollection" />
      <div class="flex justify-end">
        <UPagination
          v-model="page"
          :page-count="itemsPerPage"
          :total="totalCount"
          :active-button="{ variant: 'outline' }"
          :inactive-button="{ color: 'gray' }"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>
