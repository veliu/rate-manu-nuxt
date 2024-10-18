<script setup lang="ts">
import type { ConfirmRegistrationRequest } from "~/types/ApiTypes";

const route = useRoute();

const token = <string>route.query.token;

const { confirmRegistration } = useUser();

const request: ConfirmRegistrationRequest = { token: token };

const success = confirmRegistration(request);
</script>

<template>
  <div>
    {{ success }}
  </div>
</template>
