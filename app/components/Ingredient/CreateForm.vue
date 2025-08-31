<script setup lang="ts">
import type { CreateIngredientRequest, GroupResponse } from "~~/api/api";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { AxiosError } from "axios";
import { type InferType, object, string } from "yup";

const { $ingredientApi } = useNuxtApp();
const { myGroups, fetchGroups } = useGroups();
const toast = useToast();

const isLoading = ref(false);
const selectableUnits = ["kg", "g", "mg", "l", "ml", "pcs"];

const selectableGroups = computed(() =>
  myGroups.value?.items.map((g: GroupResponse) => ({
    label: g.name,
    value: g.id,
  })),
);

const schema = object({
  name: string().required("Required"),
  defaultUnit: string().required("Required"),
  group: string().optional(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  defaultUnit: "kg",
  group: undefined,
});

async function handleCreate(event: FormSubmitEvent<Schema>) {
  isLoading.value = true;
  try {
    const { data } = await $ingredientApi.ingredientCreate(
      event.data as CreateIngredientRequest,
    );
    toast.add({
      title: "Ingredient created",
      description: data.name,
      color: "success",
    });
    emit("form-submitted");
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ detail: string }>;
    toast.add({
      title: "Failed to create ingredient",
      description: axiosError.response?.data.detail,
      color: "error",
    });
    console.error(axiosError);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => fetchGroups());

const emit = defineEmits(["form-submitted"]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="handleCreate"
    >
      <UFormField label="Name" name="name">
        <UInput v-model="state.name" placeholder="Salt" class="w-full" />
      </UFormField>
      <UFormField label="Default unit" name="defaultUnit">
        <USelect
          v-model="state.defaultUnit"
          :items="selectableUnits"
          class="w-full"
        />
      </UFormField>
      <UFormField
        v-if="myGroups"
        v-model="state.group"
        label="Share with group"
        name="group"
      >
        <USelect
          v-model="state.group"
          :items="selectableGroups"
          class="w-full"
        />
      </UFormField>
      <UButton type="submit" :loading="isLoading"> Submit</UButton>
    </UForm>
  </div>
</template>

<style scoped></style>
