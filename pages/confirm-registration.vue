<script setup lang="ts">
const route = useRoute();

const token = <string>route.query.token;

const { confirmRegistration } = useUser();

const success = confirmRegistration({ token: token });
</script>

<template>
  <div>
    {{ success }}
  </div>
</template>
