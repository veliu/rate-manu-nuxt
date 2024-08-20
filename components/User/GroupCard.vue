<script setup lang="ts">
import type { User } from "~/types/User";
import type { GroupsResponse } from "~/types/GroupsResponse";
import type { GroupResponse } from "~/types/GroupResponse";

const props = defineProps<{
  group: GroupResponse;
}>();

const columns = [
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
];

const selected = ref(undefined);
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="pb-2">Group: {{ group.name }}</h3>
      <p class="text-xs font-italic">
        Member count: {{ group.members.length }}
      </p>
    </template>

    <div class="h-32">
      <UTable v-model="selected" :rows="group.members" :columns="columns" />
    </div>

    <template #footer> </template>
  </UCard>
</template>
