<script setup lang="ts">

const route = useRoute();

const token = route.query.token as string;

const { confirmRegistration } = useUser();

const success = confirmRegistration(token);
</script>

<template>
  <div>{{ success }}</div>
</template>
