<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import type { Food } from "~/types/ApiTypes";

definePageMeta({
  middleware: "auth",
});

const { getFood } = useSearch();

const route = useRoute();
const foodId = ref<string>(route.params.id.toString());

const { data: food } = await useAsyncData<Food>(`food/${foodId.value}`, () =>
  getFood(foodId),
);
</script>

<template>
  <FoodDetail v-if="food" :food="food" />
</template>
