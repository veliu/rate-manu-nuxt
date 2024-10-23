<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import type { Food, UpdateFoodRequest } from "~/types/ApiTypes";
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

const { createdBy, deleteProduct, updateFood } = useFood(food);
const { ratings, personalRating, updateRating } = useFoodRating(food);
const { comments, addComment } = useFoodComment(food);

const { getFood } = useSearch();

const isLoading = ref(false);
const updateMode = ref(false);

const selectedRating: Ref<number> = ref(0);

const name = ref(food.value.name);
const description = ref(food.value.description ?? undefined);

const updateRequest = computed<UpdateFoodRequest>(() => ({
  name: name.value,
  description: description.value === "" ? undefined : description.value,
}));

watch(selectedRating, async () => {
  await updateRating(selectedRating);
  food.value = await getFood(foodId);
});

const newComment = ref<string>("");

const invokeCreateComment = async () => {
  await addComment(newComment);
  newComment.value = "";
};

const invokeUpdateFood = async () => {
  await updateFood(updateRequest);
  updateMode.value = false;
};

onMounted(() => {
  selectedRating.value = personalRating.value?.rating ?? 0;
});
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
                    <UBadge color="white" variant="solid"
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
            <UFormGroup label="Name">
              <UInput v-model="name" />
            </UFormGroup>
            <UFormGroup label="Description">
              <UTextarea v-model="description" />
            </UFormGroup>
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
            <h3 class="text-2xl">Personal rating</h3>
            <EmojiRatingBar v-model="selectedRating" />
          </div>
          <div v-if="ratings.length > 1" class="my-4">
            <h3 class="font-bold text-xl mb-2">All other ratings</h3>
            <div v-for="rating in ratings" :key="rating.id">
              <div
                v-if="user?.id !== rating.createdBy.id"
                class="flex flex-row gap-2 content-center"
              >
                <span class="content-center">{{ rating.createdBy.email }}</span>
                <EmojiRating :rating-value="rating.rating" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="comments" class="my-6 flex flex-col gap-2 max-w-md">
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
