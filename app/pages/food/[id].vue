<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import type { FoodResponse } from "ratemanu-api-client";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";

const { $foodApi } = useNuxtApp();

const route = useRoute();
const foodId = computed<string>(() => route.params.id as string);

// When the route changes and userId updates, the data will be automatically refetched
const { data: food } = await useAsyncData<FoodResponse>(
  foodId,
  async () => {
    const { data } = await $foodApi.foodGet(foodId.value);
    return data;
  },
  { server: false },
);

const images = computed<string[] | null>(() =>
  food.value?.image ? [food.value?.image] : null,
);

const createdByLabel = computed(() => "Created by " + food.value?.author);
</script>

<template>
  <UContainer v-if="food">
    <UPageHeader :title="food.name" :description="food.description ?? ''" />
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 my-16">
      <div class="flex flex-col gap-8 space-y-8 items-center">
        <FoodImageCarousel :image-urls="images" class="w-full md:basis-1/2" />
        <UBadge :label="createdByLabel" color="secondary" variant="subtle" />
        <EmojiRatingBar :food="food" class="max-w-lg gap-2" />
      </div>
      <div class="flex flex-col gap-8">
        <FoodIngredients :food="food" />
        <FoodComments :food="food" />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
@import "tailwindcss";
@import "@nuxt/ui-pro";

h1 {
  @apply text-2xl font-bold;
}

h2 {
  @apply text-lg font-semibold;
}
</style>
