<script setup lang="ts">
import { PhotoIcon } from "@heroicons/vue/20/solid";
import type { LoginRequest } from "~/types/LoginRequest";
import type { CreateFoodRequest } from "~/types/CreateFoodRequest";

const { $api } = useNuxtApp();

const form = reactive<CreateFoodRequest>({
  name: "",
  description: null,
});

const handleSubmit = async () => {
  const request: CreateFoodRequest = {
    name: form.name,
    description: form.description,
  };

  const { data, status, error } = await $api.food.create(request);

  if (status.value === "success") {
    reloadNuxtApp();
  }
};
</script>

<template>
  <h2 class="font-semibold">Bewertung erstellen</h2>
  <form @submit.prevent="handleSubmit">
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label
          for="name"
          class="block text-sm font-medium leading-6 text-gray-900"
          >Name</label
        >
        <div class="mt-2">
          <div
            class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
          >
            <input
              v-model="form.name"
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Nudeln mit Gemüse"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-full">
      <label
        for="description"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Beschreibung</label
      >
      <div class="mt-2">
        <textarea
          v-model="form.description"
          id="description"
          name="description"
          rows="3"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <p class="mt-3 text-sm leading-6 text-gray-600">
        Weitere Beschreibung hinzufügen
      </p>
    </div>

    <div class="col-span-full">
      <label
        for="pictures"
        class="block text-sm font-medium leading-6 text-gray-900"
        >Bilder</label
      >
      <div
        class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
      >
        <div class="text-center">
          <PhotoIcon
            class="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div class="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Bild hochladen</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                class="sr-only"
                multiple
              />
            </label>
            <p class="pl-1">oder per drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF bis max. 10MB
          </p>
        </div>
      </div>
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="submit"
        class="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Speichern
      </button>
    </div>
  </form>
</template>
