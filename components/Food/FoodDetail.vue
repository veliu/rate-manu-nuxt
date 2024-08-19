<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import type { Food } from "~/types/Food";
import type { UpsertFoodRatingRequest } from "~/types/UpsertFoodRatingRequest";

const props = defineProps<{
  food: Food;
}>();

const foodId = ref(props.food.id);

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

const selectedRating = ref(possibleRatings[5].id);

const { $api } = useNuxtApp();

const { data, status, error } = await $api.foodRating.getPersonalRating(
  foodId.value,
);

if (status.value === "error") {
  if (error?.value?.statusCode === 404) {
    selectedRating.value = possibleRatings[5].id;
  } else {
    console.log(error.value);
  }
}

if (status.value === "success") {
  selectedRating.value = data?.value?.rating ?? 1;
}

async function handleDelete() {
  isLoading.value = true;
  const { status, error } = await $api.food.delete(foodId.value);

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
    food: foodId.value,
    rating: selectedRating.value,
  };
  const { status, error } = await $api.foodRating.upsert(createRequest);

  if (status.value === "error") {
    console.log(error.value);
  }
  isLoading.value = false;
}
</script>

<template>
  <LoadingOverlay v-if="isLoading" />
  <UButton
    label="Delete"
    variant="soft"
    size="xl"
    class="mt-4 justify-center"
    icon="i-heroicons-x-mark"
    trailing
    @click="handleDelete"
  />

  <div class="dark:text-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
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
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight white:text-gray-900">
            {{ food.name }}
          </h1>

          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [1, 2, 3, 4, 5]"
                  :key="rating"
                  :class="[
                    selectedRating <= rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">0 out of 5 stars</p>
            </div>
          </div>

          <UInputMenu
            v-model="selectedRating"
            size="xl"
            :options="possibleRatings"
            value-attribute="id"
            option-attribute="name"
            class="my-4"
          />

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base white:text-gray-700">
              {{ food.description }}
            </div>
          </div>
        </div>
      </div>
      <UButton
        :loading="isLoading"
        block
        label="Save"
        variant="soft"
        size="xl"
        class="mt-4 justify-center"
        icon="i-heroicons-pencil-square"
        trailing
        @click="handlePersist"
      />
    </div>
  </div>
</template>
