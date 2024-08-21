<script setup lang="ts">
const route = useRoute();

const token = <string>route.params.token;

const { $api } = useNuxtApp();

const { status, error } = await $api.auth.confirmRegistration(token);

console.log(status);
console.log(error);
</script>

<template>
  <div>
    {{ status }}
  </div>
</template>
