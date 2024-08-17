<script lang="ts" setup>
import Detail from "~/components/Food/Detail.vue";

definePageMeta({
  middleware: "auth",
});

const route = useRoute();
const foodId = route.params.id as string;
const { $api } = useNuxtApp();
const { data: food } = await $api.food.get(foodId);
</script>

<template>
  <Detail v-if="food" :food="food" />
</template>
