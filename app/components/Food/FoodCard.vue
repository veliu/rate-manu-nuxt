<script setup lang="ts">
import type { Food } from "~/types/ApiTypes";
import { useFoodRating } from "~/composables/useFoodRating";
import EmojiRatingBar from "~/components/Food/EmojiRatingBar.vue";

const props = defineProps<{
  food: Food;
}>();

const food = toRef(props.food);

const { personalRating } = useFoodRating(food);

const selectedRating = ref<number>(0);

onMounted(() => {
  selectedRating.value = personalRating.value?.rating ?? 0;
});
</script>

<template>
  <UCard>
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
    <div class="flex flex-1 flex-col mt-4">
      <h3 class="text-xl font-medium">
        {{ food.name }}
      </h3>
      <p class="text-sm italic text-gray-500">
        {{ food.description }}
      </p>
    </div>
    <template #footer>
      <EmojiRatingBar class="mt-auto" :food="food" />
    </template>
  </UCard>
</template>
