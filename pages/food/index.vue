<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Reactive } from "vue";
import type { FoodCollection } from "~/types/FoodCollection";

definePageMeta({
  middleware: "auth",
});

const { $api } = useNuxtApp();

const { data, status, error } = await $api.food.search();

const foodCollection: Reactive<FoodCollection> | null = data.value
  ? reactive(data.value)
  : null;

const isOpen = ref(false);
</script>

<template>
  <DefaultHeader />

  <UButton
    icon="i-heroicons-pencil-square"
    color="primary"
    label="New Food"
    variant="solid"
    block
    :trailing="false"
    @click="isOpen = true"
  />

  <USlideover v-model="isOpen">
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="isOpen = false"
      />
      <FoodCreateForm />
    </div>
  </USlideover>

  <FoodListing :food-collection="foodCollection" />
</template>
