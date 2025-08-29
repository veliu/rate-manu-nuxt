<script setup lang="ts">
import { useFoodRating } from "~/composables/useFoodRating";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";
import type { FoodResponse } from "ratemanu-api-client";

const props = defineProps<{
  food: FoodResponse;
}>();

const food = toRef(props.food);

const { personalRating } = useFoodRating(food);

const selectedRating = ref<number>(0);

onMounted(() => {
  selectedRating.value = personalRating.value?.rating ?? 0;
});
</script>

<template>
  <UPageCard
    :to="'/food/' + food.id"
    :title="food.name"
    :description="food.description ?? ''"
    orientation="vertical"
    spotlight
    spotlight-color="primary"
  >
    <NuxtImg
      :alt="food.name"
      format="webp"
      :src="food.image ? food.image : `/pizza.jpeg`"
    />
    <EmojiRatingBar class="mt-auto" :food="food" />
  </UPageCard>
</template>
