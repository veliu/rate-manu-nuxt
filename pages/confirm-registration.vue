<script setup lang="ts">
import type { ConfirmRegistrationRequest } from "~/types/ConfirmRegistrationRequest";

const route = useRoute();

const token = <string>route.query.token;

const { $api } = useNuxtApp();

const request: ConfirmRegistrationRequest = {
  token: token,
};

const { status, error } = await $api.auth.confirmRegistration(request);

if (status === "error") {
  console.log(error);
}
</script>

<template>
  <div>
    {{ status }}
  </div>
</template>
