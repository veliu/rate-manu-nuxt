<script setup lang="ts">
import type { IngredientResponse } from "ratemanu-api-client";

defineProps<{
  ingredient?: IngredientResponse | undefined;
}>();
</script>

<template>
  <div v-if="ingredient">
    <div class="flex flex-row gap-4">
      <p>{{ ingredient.id }}</p>
      <p>{{ ingredient.name }}</p>
      <p>{{ ingredient.defaultUnit }}</p>
    </div>
  </div>
</template>
