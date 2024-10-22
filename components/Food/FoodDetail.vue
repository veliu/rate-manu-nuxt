<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import type { Food } from "~/types/ApiTypes";
import EmojiRating from "./EmojiRating.vue";
import EmojiRatingBar from "./EmojiRatingBar.vue";
import { useSessionStore } from "~/store/session.store";
import { useFoodRating } from "~/composables/useFoodRating";
import { useFoodComment } from "~/composables/useFoodComment";

const props = defineProps<{
  food: Food;
}>();

const food = toRef(props.food);
const foodId = computed(() => food.value.id);

const { user } = useSessionStore();

const { assignedToGroup, createdBy, deleteProduct } = useFood(food);
const { ratings, personalRating, updateRating } = useFoodRating(food);
const { comments, addComment } = useFoodComment(food);

const { getFood } = useSearch();

const isLoading = ref(false);

const selectedRating: Ref<number> = ref(0);

watch(selectedRating, async () => {
  await updateRating(selectedRating);
  food.value = await getFood(foodId);
});

const newComment = ref<string>("");

const invokeCreateComment = async () => {
  await addComment(newComment);
  newComment.value = "";
};

onMounted(() => {
  selectedRating.value = personalRating.value?.rating ?? 0;
});
</script>

<template>
  <LoadingOverlay v-if="isLoading" />

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
          <div class="flex flex-row w-full gap-2 items-center">
            <EmojiRating :rating-value="food.averageRating" />
            <h1 class="text-3xl font-bold tracking-tight white:text-gray-900">
              {{ food.name }}
            </h1>
          </div>
          <div class="my-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base white:text-gray-700">
              {{ food.description }}
            </div>
            <div>
              <h3 class="font-bold text-xl mb-2">Personal rating</h3>
              <EmojiRatingBar v-model="selectedRating" />
            </div>
            <div v-if="ratings.length > 1" class="my-4">
              <h3 class="font-bold text-xl mb-2">All other ratings</h3>
              <div v-for="rating in ratings" :key="rating.id">
                <div
                  v-if="user?.id !== rating.createdBy.id"
                  class="flex flex-row gap-2 content-center"
                >
                  <span class="content-center">{{
                    rating.createdBy.email
                  }}</span>
                  <EmojiRating :rating-value="rating.rating" />
                </div>
              </div>
            </div>
            <div>Created by {{ createdBy }}</div>
            <div>Visible for group {{ assignedToGroup }}</div>
          </div>
        </div>
      </div>
      <section id="comments" class="my-8 flex flex-col gap-2 max-w-md">
        <h3 class="text-2xl">Comments</h3>
        <div class="my-2">
          <FoodComment v-for="c in comments" :key="c.id" :food-comment="c" />
        </div>
        <div class="flex flex-col gap-2">
          <UTextarea
            v-model="newComment"
            color="primary"
            variant="outline"
            placeholder="New Comment..."
            autoresize
          />
          <UButton
            :disabled="newComment === ''"
            label="Submit"
            variant="soft"
            block
            @click="invokeCreateComment"
          />
        </div>
      </section>
    </div>
    <UButton
      v-if="food.author === user?.id"
      label="Delete"
      variant="soft"
      size="xl"
      class="mt-4 justify-center"
      icon="i-heroicons-x-mark"
      color="red"
      trailing
      @click="deleteProduct"
    />
  </div>
</template>
