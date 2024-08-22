<script setup lang="ts">
import type { GroupResponse } from "~/types/GroupResponse";

defineProps<{
  group: GroupResponse;
}>();

const columns = [
  {
    key: "email",
    label: "Email",
  },
];

const selected = ref(undefined);
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex flex-row justify-between">
        <h3 class="pb-2">Group: {{ group.name }}</h3>
        <UBadge color="black" variant="solid" :label="group.role" />
      </div>

      <p class="text-xs font-italic">
        Member count: {{ group.members.length }}
      </p>
    </template>

    <div class="h-32">
      <UTable v-model="selected" :rows="group.members" :columns="columns" />
    </div>

    <template #footer>
      <GroupInviteForm :group-id="group.id" />
    </template>
  </UCard>
</template>
