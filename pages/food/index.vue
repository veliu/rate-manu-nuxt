<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Reactive } from "vue";
import type { FoodCollection } from "~/types/FoodCollection";

definePageMeta({
  middleware: "auth",
});

const { $api } = useNuxtApp();

const { data, status, error } = await $api.food.search();

if (status.value === "error") {
  if (error.value?.statusCode === 401) {
    navigateTo("/login");
  }

  console.log(error);
}

const foodCollection: Reactive<FoodCollection> | null = data.value
  ? reactive(data.value)
  : null;
</script>

<template>
  <Header />
  <Listing :food-collection="foodCollection" />
</template>
