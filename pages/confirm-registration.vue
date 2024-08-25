<script setup lang="ts">
import type { ConfirmRegistrationRequest } from "~/types/ApiTypes";

const route = useRoute();

const token = <string>route.query.token;

const { $api } = useNuxtApp();

const request: ConfirmRegistrationRequest = {
  token: token,
};

const { status, error } = await $api.auth.confirmRegistration(request);

if (status.value === "error") {
  console.log(error);
}
</script>

<template>
  <div>
    {{ status }}
  </div>
</template>
