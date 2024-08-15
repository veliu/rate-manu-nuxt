<script setup lang="ts">
import type { FoodRating } from "~/types/FoodRating";

const foodRatings: FoodRating[] = [
  {
    id: "1",
    name: "Pizza",
    description: "War mega geil! Rezept aus dem Internet",
    rating: 2,
    images: ["/pizza.jpeg"],
  },
];
</script>
<template>
  <Header />
  <div>Hello and welcome</div>
</template>
