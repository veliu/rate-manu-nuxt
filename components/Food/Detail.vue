<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import type { Food } from "~/types/Food";

const props = defineProps<{
  food: Food;
}>();

const { $api } = useNuxtApp();

const isLoading = ref(false);

async function handleDelete() {
  isLoading.value = true;
  const { status, error } = await $api.food.delete(props.food.id);

  if (status.value === "success") {
    navigateTo("/food");
  }

  if (status.value === "error") {
    console.log(error.value);
  }

  isLoading.value = false;
}
</script>

<template>
  <div
    v-if="isLoading"
    class="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center"
  >
    <div class="flex items-center">
      <span class="text-3xl mr-4">Loading</span>
      <svg
        class="animate-spin h-8 w-8 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  </div>
  <div class="bg-white">
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
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }"
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

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
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
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            {{ food.name }}
          </h1>

          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    0 > rating ? 'text-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">0 out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div
              class="space-y-6 text-base text-gray-700"
              v-html="food.description"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        @click="handleDelete"
        class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-red-200 px-8 py-3 text-base font-medium text-black hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Delete
      </button>
    </div>
  </div>
</template>
