<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useSessionStore } from "~/store/session.store";

definePageMeta({
  middleware: "auth",
});

const { user } = useSessionStore();

const items = [
  {
    key: "me",
    label: "Me",
    icon: "i-heroicons-finger-print",
  },
  {
    key: "groups",
    label: "Groups",
    icon: "i-heroicons-user-group",
  },
];
</script>

<template>
  <div class="mx-auto max-w-2xl lg:max-w-2xl">
    <UTabs :items="items" class="my-8">
      <template #content="{ item }">
        <div v-if="item.key === 'me' && user">
          <UserMe :user="user" />
        </div>
        <div v-if="item.key === 'groups' && user">
          <UserGroups />
        </div>
      </template>
    </UTabs>
  </div>
</template>
