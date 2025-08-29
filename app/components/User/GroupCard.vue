<script setup lang="ts">
import type { GroupResponse } from "ratemanu-api-client";

const props = defineProps<{
  group?: GroupResponse | undefined;
}>();

const { group } = toRefs(props);

const columns = [
  {
    key: "email",
    label: "Email",
  },
];
</script>

<template>
  <UCard v-if="group">
    <template #header>
      <div class="flex flex-row justify-between">
        <h3 class="pb-2">Group: {{ group.name }}</h3>
        <UBadge color="primary" variant="solid" :label="group.role" />
      </div>

      <p class="text-xs font-italic">
        Member count: {{ group.members.length }}
      </p>
    </template>

    <div class="min-h-32">
      <UTable :data="group.members" :header="columns" />
    </div>

    <template #footer>
      <GroupInviteForm :group-id="group.id" />
    </template>
  </UCard>
</template>
