<script setup lang="ts">
import GroupCard from "~/components/User/GroupCard.vue";

const { myGroups, fetchGroups } = useGroups();

onMounted(() => fetchGroups());
</script>

<template>
  <div
    v-for="group in myGroups"
    :key="group.id"
    class="flex flex-col gap-4 mt-8"
  >
    <GroupCard :group="group" />
  </div>
</template>
