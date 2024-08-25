<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import type { UpsertFoodRatingRequest, Food } from "~/types/ApiTypes";
import { useFood } from "~/composables/useFood";

const props = defineProps<{
  food: Food;
}>();

const foodId = props.food.id;

const isLoading = ref(false);

const possibleRatings = [
  {
    id: 1,
    name: "1 Lieblingsessen",
  },
  {
    id: 2,
    name: "2 Lecker",
  },
  {
    id: 3,
    name: "3 Gut - esse ich ab und zu",
  },
  {
    id: 4,
    name: "4 Nichts Besonderes",
  },
  {
    id: 5,
    name: "5 Der Hunger treibts runter",
  },
  {
    id: 6,
    name: "6 Bitte nie wieder!",
  },
];

const selectedRating: Ref<number> = ref(possibleRatings[5].id);

const { $api } = useNuxtApp();

const { data: myRating } = await $api.foodRating.getPersonalRating(foodId);
selectedRating.value = myRating?.value?.rating ?? 1;
const { data: ratings } = await $api.foodRating.getRatings(foodId);

async function handleDelete() {
  isLoading.value = true;
  const { status, error } = await $api.food.delete(foodId);

  if (status.value === "success") {
    navigateTo("/food");
  }

  if (status.value === "error") {
    console.log(error.value);
  }

  isLoading.value = false;
}

async function handlePersist() {
  isLoading.value = true;

  const createRequest: UpsertFoodRatingRequest = {
    food: foodId,
    rating: selectedRating.value,
  };
  const {
    status,
    error,
    data: myRating,
  } = await $api.foodRating.upsert(createRequest);

  if (status.value === "error") {
    console.log(error.value);
  }

  selectedRating.value = myRating?.value?.rating ?? 1;
  isLoading.value = false;
}

const { createdBy, assignedToGroup } = await useFood(props.food);
</script>

<template>
  <LoadingOverlay v-if="isLoading" />
  <UButton
    v-if="food.author === myRating?.createdBy"
    label="Delete"
    variant="soft"
    size="xl"
    class="mt-4 justify-center"
    icon="i-heroicons-x-mark"
    trailing
    @click="handleDelete"
  />

  <div class="dark:text-white">
    <div class="mx-auto max-w-2xl py-4 sm:py-24 lg:max-w-7xl">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div
            class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
          >
            <TabList v-if="food.image" class="grid grid-cols-4 gap-6">
              <Tab
                :key="food.image"
                v-slot="{ selected }"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                <span class="sr-only">{{ food.image }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <NuxtImg
                    :src="food.image ? food.image : `/pizza.jpeg`"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-indigo-500' : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-2 aspect-w-3 w-full">
            <TabPanel>
              <NuxtImg
                :src="food.image"
                :alt="food.image"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight white:text-gray-900">
            {{ food.name }}
          </h1>
          <div class="my-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base white:text-gray-700">
              {{ food.description }}
            </div>
          </div>

          <div class="mt-3">
            <h3 class="sr-only">Ratings</h3>
            <Rating :user-rating="selectedRating" />
          </div>
        </div>
      </div>
      <div class="flex flex-fow gap-2">
        <UInputMenu
          v-model="selectedRating"
          size="xl"
          :options="possibleRatings"
          value-attribute="id"
          option-attribute="name"
          class="my-4 basis-3/4"
        />
        <UButton
          :loading="isLoading"
          variant="soft"
          class="justify-center my-4 basis-1/4"
          icon="i-heroicons-check"
          trailing
          @click="handlePersist"
        />
      </div>
    </div>
    <div class="my-4" v-if="ratings">
      <h3 class="font-bold text-xl mb-2">All other ratings</h3>
      <div v-for="rating in ratings.items">
        <div
          v-if="myRating?.createdBy !== rating.createdBy.id"
          class="flex flex-row gap-2"
        >
          <Rating :user-rating="rating.rating" />
          {{ rating.createdBy.email }}
        </div>
      </div>
    </div>
    <div>Created by {{ createdBy }}</div>
    <div>Visible for group {{ assignedToGroup }}</div>
  </div>
</template>
