<script setup lang="ts">
import { h, resolveComponent } from "vue";
import type {
  CreateFoodIngredientsRequest,
  FoodIngredientResponse,
  FoodResponse,
} from "ratemanu-api-client";
import type { TableColumn } from "@nuxt/ui";
import type { Row } from "@tanstack/vue-table";

const props = defineProps<{
  food: FoodResponse;
}>();

const UButton = resolveComponent("UButton");
const UDropdownMenu = resolveComponent("UDropdownMenu");

const { $foodIngredientsApi, $ingredientApi } = useNuxtApp();

const foodId = computed<string>(() => props.food.id);

const { data: foodIngredients, refresh: refreshFoodIngredients } =
  await useAsyncData<FoodIngredientResponse[]>(
    "food-ingredients" + foodId.value,
    async () => {
      const { data } = await $foodIngredientsApi.foodIngredientsGet(
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

async function handleDeleteIngredient(foodIngredientId: string) {
  await $foodIngredientsApi.foodIngredientsDelete(
    foodId.value,
    foodIngredientId,
  );
  await refreshFoodIngredients();
}

function getRowItems(row: Row<TableRowEntry>) {
  return [
    {
      type: "label",
      label: "Actions",
    },
    {
      type: "separator",
    },
    {
      label: "Delete",
      onSelect() {
        handleDeleteIngredient(row.original.ingredientId);
      },
    },
  ];
}

type TableRowEntry = {
  id: string;
  ingredientId: string;
  name: string;
  amount: string;
};

const tableRowEntries = computed<TableRowEntry[]>(
  () =>
    foodIngredients.value?.map((i: FoodIngredientResponse) => ({
      id: i.id,
      ingredientId: i.ingredientId,
      name: i.ingredient.name,
      amount: i.amount + i.unit,
    })) || [],
);

console.log(tableRowEntries.value);

const columns: TableColumn<TableRowEntry>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-right" },
        h(
          UDropdownMenu,
          {
            content: {
              align: "end",
            },
            items: getRowItems(row),
            "aria-label": "Actions dropdown",
          },
          () =>
            h(UButton, {
              icon: "i-lucide-ellipsis-vertical",
              color: "neutral",
              variant: "ghost",
              class: "ml-auto",
              "aria-label": "Actions dropdown",
            }),
        ),
      );
    },
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
    await $foodIngredientsApi.foodIngredientsCreate(foodId.value, {
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
      <UTable
        ref="table"
        :data="tableRowEntries"
        :columns="columns"
        class="flex-1"
      />
      <div class="flex flex-row gap-2 my-8">
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
          icon="i-lucide-plus"
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
