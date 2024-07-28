<script setup lang="ts">
import { PlusCircleIcon } from "@heroicons/vue/20/solid";
import type { Ref } from "vue";

let openForm: Ref<boolean> = ref(false);

const toggleCreateForm = function () {
  openForm.value = !openForm.value;
};
</script>

<template>
  <button
    type="button"
    @click="toggleCreateForm"
    class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Neue Bewertung
    <PlusCircleIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
  </button>

  <div
    :class="[
      'fixed bottom-0 left-0 w-full h-4/5 bg-white text-black p-4 transition-transform duration-300 transform z-10 border-2 rounded-lg',
      openForm ? 'translate-y-0' : 'translate-y-full',
    ]"
    class="max-w-md"
  >
    <RatingCreateForm />
  </div>
</template>
