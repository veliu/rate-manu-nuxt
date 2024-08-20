<script setup lang="ts">
import type { User } from "~/types/User";

defineProps<{
  user: User;
}>();
</script>

<template>
  <div class="my-8">
    <UFormGroup label="Email">
      <UInput
        placeholder="you@example.com"
        icon="i-heroicons-envelope"
        :model-value="user.email"
        disabled
      />
    </UFormGroup>
  </div>
</template>
