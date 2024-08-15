<script lang="ts" setup>
import View from "~/components/Food/View.vue";
import type { FoodRating } from "~/types/FoodRating";

const route = useRoute();
const ratingId = route.params.id;

const rating = {
  id: "1",
  name: "Pizza",
  description: "War mega geil! Rezept aus dem Internet",
  rating: 2,
  images: ["pizza.jpeg"],
} as FoodRating;
</script>
<template>
  <Header />
  <View :food-rating="rating" />
</template>
