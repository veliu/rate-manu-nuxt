<script setup lang="ts">
import type { IngredientCollectionResponse } from "ratemanu-api-client";

defineProps<{
  ingredientCollection?: IngredientCollectionResponse | undefined;
}>();
</script>

<template>
  <div v-if="ingredientCollection">
    <div v-for="ingredient in ingredientCollection.items" :key="ingredient.id">
      <IngredientEntry :ingredient="ingredient" />
    </div>
  </div>
</template>
