<script setup lang="ts">
import type {
  CreateFoodIngredientsRequest,
  FoodIngredientResponse,
  FoodResponse,
} from "ratemanu-api-client";
import type { TableColumn } from "@nuxt/ui";

const props = defineProps<{
  food: FoodResponse;
}>();

const { $foodIngredientsApi, $ingredientApi } = useNuxtApp();

const foodId = computed<string>(() => props.food.id);

const { data: foodIngredients, refresh: refreshFoodIngredients } =
  await useAsyncData<FoodIngredientResponse[]>(
    "food-ingredients" + foodId.value,
    async () => {
      const { data } = await $foodIngredientsApi.foodIngredientsRead(
        foodId.value,
      );
      return data.ingredients;
    },
    { server: false },
  );

const { data: ingredients, status } = await useAsyncData<{ label: string }[]>(
  "ingredients" + foodId.value,
  async () => {
    const { data } = await $ingredientApi.ingredientSearch();
    return data.items.map((i) => ({ label: i.name, key: i.id }));
  },
  { lazy: true },
);

const columns: TableColumn<FoodIngredientResponse>[] = [
  {
    accessorKey: "ingredient.name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `${row.getValue("amount")} ${row.getValue("unit")}`,
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
];

const selectableUnits = ["kg", "g", "ml", "l", "pcs"];

const selectedUnit = ref("g");
const selectedAmount = ref(0);
const selectedIngredient = ref<{ key: string; label: string } | undefined>(
  undefined,
);

async function addIngredient() {
  if (selectedIngredient.value && selectedAmount.value > 0) {
    await $foodIngredientsApi.foodIngredientsAdd(foodId.value, {
      ingredients: [
        {
          ingredientId: selectedIngredient.value.key,
          amount: selectedAmount.value,
          unit: selectedUnit.value,
        },
      ],
    } as CreateFoodIngredientsRequest);

    refreshFoodIngredients();
  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4 p-8">Ingredients</h2>
    <div v-if="foodIngredients">
      <UTable :data="foodIngredients" :columns="columns" class="flex-1" />
      <div class="flex flex-row gap-2">
        <UInputMenu
          v-model="selectedIngredient"
          :items="ingredients"
          :loading="status === 'pending'"
          icon="i-lucide-citrus"
          placeholder="Select ingredient"
        />
        <UInputNumber v-model="selectedAmount" />
        <UInputMenu
          v-model="selectedUnit"
          :items="selectableUnits"
          icon="i-lucide-ruler"
          placeholder="Select unit"
          class=""
        />
        <UButton
          label="Add"
          color="neutral"
          variant="subtle"
          @click="addIngredient"
        />
      </div>
    </div>
    <div v-else>Nothing selected</div>
  </div>
</template>

<style scoped></style>
