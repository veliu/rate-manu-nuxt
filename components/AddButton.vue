<script setup lang="ts">
import { PlusCircleIcon } from "@heroicons/vue/20/solid";
import type { Ref } from "vue";

let openForm: Ref<boolean> = ref(false);

const toggleCreateForm = function () {
  openForm.value = !openForm.value;
};
</script>

<template>
  <UButton
    icon="i-heroicons-pencil-square"
    color="primary"
    label="Neue Bewertung"
    variant="solid"
    :trailing="false"
    @click="toggleCreateForm"
  />

  <div
    :class="[
      'fixed bottom-0 left-0 w-full h-4/5 bg-white text-black p-4 transition-transform duration-300 transform z-10 border-2 rounded-lg',
      openForm ? 'translate-y-0' : 'translate-y-full',
    ]"
    class="max-w-md"
  >
    <FoodCreateForm />
  </div>
</template>
