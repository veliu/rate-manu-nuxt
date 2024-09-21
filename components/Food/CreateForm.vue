<script setup lang="ts">
import { object, string, mixed, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import type {
  UpdateFoodImageRequest,
  CreateFoodRequest,
} from "~/types/ApiTypes";
import type { Ref } from "vue";

const schema = object({
  name: string().required("Required"),
  description: string(),
  image: mixed().test("fileSize", "The file is too large", (value) => {
    if (!value || !Array.isArray(value)) return true;
    return value[0].size <= 8388608;
  }),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: "",
  description: undefined,
  image: undefined,
});

const file: Ref<File | null> = ref(null);

const isLoading = ref(false);

const setImage = async (fileList: FileList) => {
  file.value = fileList.item(0);
};

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  isLoading.value = true;
  const { $api } = useNuxtApp();

  const createFoodRequest: CreateFoodRequest = {
    name: event.data.name,
    description: event.data.description,
  };

  const {
    data: foodData,
    status: foodStatus,
    error: foodError,
  } = await $api.food.create(createFoodRequest);

  if (foodStatus.value === "error") {
    console.log(foodError);
  }

  if (event.data.image && foodData.value) {
    const updateImageRequest = {
      image: file.value,
    } as UpdateFoodImageRequest;

    const { status: imageStatus, error: imageError } =
      await $api.food.updateImage(foodData.value.id, updateImageRequest);

    if (imageStatus.value === "error") {
      console.log(imageError);
    }
  }
  isLoading.value = false;
  reloadNuxtApp();
};
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col sm:px-6 lg:px-8">
    <h2 class="text-xl py-8 font-bold text-primary">New Food</h2>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Description" name="description">
        <UTextarea v-model="state.description" />
      </UFormGroup>
      <UFormGroup label="Image" name="image">
        <UInput v-model="state.image" type="file" @change="setImage" />
      </UFormGroup>
      <UButton type="submit" :loading="isLoading"> Submit</UButton>
    </UForm>
  </div>
</template>
