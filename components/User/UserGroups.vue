<script setup lang="ts">
import type { User } from "~/types/ApiTypes";
import GroupCard from "~/components/User/GroupCard.vue";

defineProps<{
  user: User;
}>();

const { $api } = useNuxtApp();

const { data: groups, error, status } = await $api.user.myGroups();

if (status.value === "error") {
  console.log(error);
}
</script>

<template>
  <div
    v-for="group in groups?.items"
    :key="group.id"
    class="flex flex-col gap-4 mt-8"
  >
    <GroupCard :group="group" />
  </div>
</template>
