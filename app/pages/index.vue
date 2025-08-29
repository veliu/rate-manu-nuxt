<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { useSearch } from "~/composables/useSearch";
import { hash } from "ohash";
import type { Sorting } from "ratemanu-api-client";
const { makeSearch } = useSearch();

const itemsPerPage = ref(9);
const page = ref(1);
const offset = computed(() => (page.value - 1) * itemsPerPage.value);
const sorting = ref<Sorting[]>([
  { propertyName: "averageRating", direction: "asc" },
]);
const filter = ref<Filter[]>([]);

const openCreateFoodForm = ref(false);
const openFilterForm = ref(false);

const searchCriteria = ref<SearchCriteria>({
  offset: offset.value,
  limit: itemsPerPage.value,
  sorting: sorting.value,
  filter: filter.value,
});

const sc = computed(() => ({
  offset: offset.value,
  limit: searchCriteria.value.limit,
  sorting: searchCriteria.value.sorting,
  filter: searchCriteria.value.filter,
}));

const searchHash = computed(() => hash(searchCriteria.value));

const { data: foodCollection } = useAsyncData(
  searchHash.value,
  () => makeSearch(sc),
  { watch: [sc] },
);

const totalCount = computed(() => foodCollection.value?.count || 0);
const items = computed(() => foodCollection.value?.items || []);
</script>

<template>
  <UContainer>
    <FoodSearch />
    <div class="mx-auto max-w-2xl lg:max-w-7xl">
      <DesktopActionBar
        class="hidden md:flex"
        @toggle:filter-form="openFilterForm = true"
        @toggle:create-form="openCreateFoodForm = true"
      />

      <USlideover
        v-model:open="openCreateFoodForm"
        title="Create Food"
        :close="{ color: 'primary' }"
      >
        <template #body>
          <FoodCreateForm />
        </template>
      </USlideover>

      <USlideover
        v-model:open="openFilterForm"
        title="Sorting"
        :close="{ color: 'primary' }"
      >
        <template #body>
          <FilterAndSorting v-model="searchCriteria" />
        </template>
      </USlideover>

      <div class="flex justify-end">
        <UPagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total="totalCount"
          :active-button="{ variant: 'outline' }"
          :inactive-button="{ color: 'gray' }"
          size="sm"
        />
      </div>

      <div class="my-8">
        <UPageGrid>
          <FoodCard v-for="food in items" :key="food.id" :food="food" />
        </UPageGrid>
      </div>

      <div class="flex justify-end">
        <UPagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total="totalCount"
          :active-button="{ variant: 'outline' }"
          :inactive-button="{ color: 'gray' }"
          size="sm"
        />
      </div>
    </div>

    <MobileActionBar
      class="md:hidden"
      @toggle:filter-form="openFilterForm = true"
      @toggle:create-form="openCreateFoodForm = true"
    />
  </UContainer>
</template>
