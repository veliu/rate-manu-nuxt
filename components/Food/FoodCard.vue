<script setup lang="ts">
import type { Food, UpsertFoodRatingRequest } from "~/types/ApiTypes";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";
import EmojiRating from "~/components/Food/EmojiRating.vue";

const props = defineProps<{
  food: Food;
}>();

const food = ref(props.food);

const personalRating = ref(food.value.personalRating?.rating ?? 6);

const { $api } = useNuxtApp();

async function updateRating(rating: number) {
  const request: UpsertFoodRatingRequest = {
    food: props.food.id,
    rating: rating,
  };
  await $api.foodRating.upsert(request);
  const { data } = await $api.food.get(food.value.id);
  food.value = data.value;
}

watch(personalRating, (newValue) => {
  updateRating(newValue);
});
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-row justify-between">
        <span>Durschnittliche Bewertung </span>
        <EmojiRating :rating-value="food.averageRating" />
      </div>
    </template>
    <div class="aspect-h-2 aspect-w-3 sm:aspect-none hover:opacity-75 sm:h-96">
      <NuxtLink :to="'/food/' + food.id">
        <NuxtImg
          format="webp"
          sizes="100vw sm:50vw md:400px"
          :src="food.image ? food.image : `/pizza.jpeg`"
          class="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-1 flex-col space-y-2 py-4">
      <h3 class="text-xl font-medium">
        {{ food.name }}
      </h3>
      <div class="flex flex-1 flex-col justify-end">
        <p class="text-sm italic text-gray-500">
          {{ food.description }}
        </p>
      </div>
    </div>
    <template #footer>
      <EmojiRatingBar v-model="personalRating" />
    </template>
  </UCard>
</template>
