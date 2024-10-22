<script setup lang="ts">
import type { Food, UpsertFoodRatingRequest } from "~/types/ApiTypes";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";
import EmojiRating from "~/components/Food/EmojiRating.vue";

const props = defineProps<{
  food: Food;
}>();

const food = toRef(props.food);
const foodId = computed(() => food.value.id);

const { personalRating, updateRating } = useFood(food);
const { getFood } = useSearch();

const selectedRating = ref<number>(0);

onMounted(() => {
  selectedRating.value = personalRating.value?.rating ?? 0;
});
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-row justify-between">
        <span>Average Rating</span>
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
      <EmojiRatingBar v-model="selectedRating" />
    </template>
  </UCard>
</template>
