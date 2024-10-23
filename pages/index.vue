<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Filter, SearchCriteria, Sorting } from "~/types/ApiTypes";
import { ref, computed } from "vue";
import { useSearch } from "~/composables/useSearch";
import { objectHash } from "ohash";

definePageMeta({
  middleware: "auth",
});

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

const searchHash = computed(() => objectHash(searchCriteria.value));

const { data: foodCollection } = useAsyncData(
  searchHash.value,
  () => makeSearch(sc),
  { watch: [sc] },
);

const totalCount = computed(() => foodCollection.value?.count || 0);
const items = computed(() => foodCollection.value?.items || []);
</script>

<template>
  <div class="mx-auto max-w-2xl lg:max-w-7xl">
    <DesktopActionBar
      class="hidden md:flex"
      @toggle:filter-form="openFilterForm = true"
      @toggle:create-form="openCreateFoodForm = true"
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
        <FilterAndSorting v-model="searchCriteria" />
      </div>
    </USlideover>

    <FoodListing class="my-4" :food-collection="items" />

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

  <MobileActionBar
    class="md:hidden"
    @toggle:filter-form="openFilterForm = true"
    @toggle:create-form="openCreateFoodForm = true"
  />
</template>
