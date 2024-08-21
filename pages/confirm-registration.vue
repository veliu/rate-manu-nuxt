<script setup lang="ts">
import type { ConfirmRegistrationRequest } from "~/types/ConfirmRegistrationRequest";

const route = useRoute();

const token = <string>route.params.token;

const { $api } = useNuxtApp();

const { status, error } = await $api.auth.confirmRegistration({
  token: token,
} as ConfirmRegistrationRequest);

console.log(status);
console.log(error);
</script>

<template>
  <div>
    {{ status }}
  </div>
</template>
