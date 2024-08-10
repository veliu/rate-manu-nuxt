<script setup lang="ts">
import Cookies from "js-cookie";
const route = useRoute();
const jwt = Cookies.get("ratemanu-token");
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
