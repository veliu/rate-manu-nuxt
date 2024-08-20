<script setup lang="ts">
import type { User } from "~/types/User";
import GroupCard from "~/components/User/GroupCard.vue";

defineProps<{
  user: User;
}>();

const { $api } = useNuxtApp();

const { data: groups } = await $api.user.myGroups();
</script>

<template>
  <div v-for="group in groups?.items" class="flex flex-col gap-4 mt-8">
    <GroupCard :group="group" />
  </div>
</template>
