<script setup lang="ts">
import type { IngredientCollectionResponse } from "ratemanu-api-client";

const { $ingredientApi } = useNuxtApp();

const {
  data: ingredientCollection,
  refresh,
  status,
} = useAsyncData<IngredientCollectionResponse>(
  "ingredients",
  async () => {
    const { data } = await $ingredientApi.ingredientSearch();
    return data;
  },
  { server: false },
);
</script>

<template>
  <UContainer>
    <UPageHeader
      title="Ingredients"
      description="Here you can find all your ingredients"
    />
    <UPageBody>
      <USlideover title="New Ingredient">
        <UButton label="Create" color="neutral" variant="subtle" />

        <template #body>
          <IngredientCreateForm @form-submitted="refresh" />
        </template>
      </USlideover>
      <div v-if="status === 'pending'">Loading...</div>
      <div v-else-if="status === 'idle'">Loading...</div>
      <div v-else-if="status === 'error'">Error loading ingredients</div>

      <IngredientList
        v-else-if="status === 'success'"
        :ingredient-collection="ingredientCollection"
      />
    </UPageBody>
  </UContainer>
</template>
