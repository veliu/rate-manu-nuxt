<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import type { Food, UpdateFoodRequest } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import { useFoodComment } from "~/composables/useFoodComment";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";
import EmojiRating from "~/components/Food/EmojiRating.vue";

const props = defineProps<{
  food: Food;
}>();

const food = toRef(props.food);
const foodId = computed(() => food.value.id);

const { user } = useSessionStore();

const { createdBy, deleteProduct, updateFood } = useFood(food);
const { getFood } = useSearch();

const isLoading = ref(false);
const updateMode = ref(false);

const name = ref(food.value.name);
const description = ref(food.value.description ?? undefined);

const updateRequest = computed<UpdateFoodRequest>(() => ({
  name: name.value,
  description: description.value === "" ? undefined : description.value,
}));

const invokeRefreshFood = async () => {
  food.value = await getFood(foodId);
};

const invokeUpdateFood = async () => {
  await updateFood(updateRequest);
  updateMode.value = false;
};
</script>

<template>
  <LoadingOverlay v-if="isLoading" />

  <div class="dark:text-white">
    <div class="mx-auto max-w-2xl py-4 sm:py-24 lg:max-w-7xl">
      <section
        id="product-base-information"
        class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8"
      >
        <section id="product-image">
          <TabGroup as="div" class="flex flex-col-reverse">
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
                <div class="relative w-full h-64 sm:h-full">
                  <NuxtImg
                    :src="food.image"
                    :alt="food.image"
                    class="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                  <div class="absolute top-2 right-2">
                    <EmojiRating :rating-value="food.averageRating" />
                  </div>
                  <div class="absolute top-2 left-2">
                    <UBadge color="primary" variant="solid"
                      >Created by {{ createdBy }}</UBadge
                    >
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </section>

        <section id="product-description" class="mt-6 sm:mt-16 sm:px-0 lg:mt-0">
          <div v-if="updateMode" class="flex flex-col gap-2">
            <UFormField label="Name">
              <UInput v-model="name" />
            </UFormField>
            <UFormField label="Description">
              <UTextarea v-model="description" />
            </UFormField>
            <UButton
              block
              variant="outline"
              label="Save"
              icon="i-heroicons-check"
              @click="invokeUpdateFood"
            />
          </div>
          <div v-else class="flex flex-col w-full gap-2">
            <div id="food-title" class="flex flex-row items-center gap-2">
              <UTooltip
                text="Update name and description"
                :popper="{ arrow: true }"
              >
                <UButton
                  variant="outline"
                  icon="i-heroicons-pencil"
                  @click="updateMode = true"
                />
              </UTooltip>

              <h1 class="text-3xl font-bold tracking-tight white:text-gray-900">
                {{ food.name }}
              </h1>
            </div>

            <div id="food-description text-base white:text-gray-700">
              <h3 class="sr-only">Description</h3>
              {{ food.description }}
            </div>
          </div>
        </section>

        <section id="product-rating">
          <div class="my-6">
            <EmojiRatingBar :food="food" @update:rating="invokeRefreshFood" />
          </div>
        </section>
      </section>
      <FoodComments :food="food" />
    </div>
    <UButton
      v-if="food.author === user?.id"
      label="Delete"
      variant="soft"
      size="xl"
      class="mt-4 justify-center"
      icon="i-heroicons-x-mark"
      color="error"
      trailing
      @click="deleteProduct"
    />
  </div>
</template>
