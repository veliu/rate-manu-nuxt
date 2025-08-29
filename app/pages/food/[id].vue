<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
const { $foodApi } = useNuxtApp();

const route = useRoute();
const foodId = computed(() => `user-${route.params.id}`);

// When the route changes and userId updates, the data will be automatically refetched
const { data: food } = useAsyncData(foodId, () =>
  $foodApi.foodGet(route.params.id),
);
</script>

<template>
  <FoodDetail v-if="food" :food="food.data" />
</template>
