<script setup lang="ts">
import type { Food, FoodRating } from "~/types/ApiTypes";

const props = defineProps<{
  food: Food;
}>();

const food = toRef(props.food);

const emit = defineEmits(["update:rating"]);

const { ratings, updateRating, personalRating } = useFoodRating(food);

const emojis = {
  1: { value: 1, emoji: "❤" },
  2: { value: 2, emoji: "👍" },
  3: { value: 3, emoji: "😐" },
  4: { value: 4, emoji: "🙄" },
  5: { value: 5, emoji: "😫" },
  6: { value: 6, emoji: "🤢" },
};

const personalRatingValue = computed(() => personalRating.value?.rating);

const countRatingsFor = (rating: number): number => {
  let filtered: FoodRating[];
  filtered = ratings.value.filter((r) => r.rating === rating);
  return filtered.length;
};

const invokeUpdateRating = async (value: number) => {
  await updateRating(value);
  emit("update:rating", value);
};
</script>

<template>
  <div class="flex flex-row justify-evenly">
    <div
      v-for="emoji in emojis"
      :key="emoji.value"
      class="py-1 px-2 border border-1 rounded-lg flex flex-row gap-2 border-gray-600 hover:border-primary"
      :class="{
        'border-primary hover:border-primary-300':
          personalRatingValue === emoji.value,
      }"
    >
      <button
        class="flex flex-row justify-center items-center gap-1"
        @click="invokeUpdateRating(emoji.value)"
      >
        <Twemoji size="1.2em" :emoji="emoji.emoji" />
        <span class="font-bold">{{ countRatingsFor(emoji.value) }}</span>
      </button>
    </div>
  </div>
</template>
