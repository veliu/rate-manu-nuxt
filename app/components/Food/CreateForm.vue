<script setup lang="ts">
import { object, string, mixed, type InferType } from "yup";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { CreateFoodRequest } from "ratemanu-api-client";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
const MIN_DIMENSIONS = { width: 200, height: 200 };
const MAX_DIMENSIONS = { width: 4096, height: 4096 };
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    Number.parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  );
};

const { createFood, addImage } = useFood(ref(undefined));

const router = useRouter();

const isLoading = ref(false);

const schema = object({
  name: string().required("Required"),
  description: string().optional(),
  image: mixed<File>()
    .required("Please select an image file.")
    .test(
      "fileSize",
      `The image is too large. Please choose an image smaller than ${formatBytes(MAX_FILE_SIZE)}.`,
      (value) => {
        if (!value) return false;
        return value.size <= MAX_FILE_SIZE;
      },
    )
    .test(
      "fileType",
      "Please upload a valid image file (JPEG, PNG, or GIF).",
      (value) => {
        if (!value) return false;
        return ACCEPTED_IMAGE_TYPES.includes(value.type);
      },
    )
    .test(
      "dimensions",
      `The image dimensions are invalid. Please upload an image between ${MIN_DIMENSIONS.width}x${MIN_DIMENSIONS.height} and ${MAX_DIMENSIONS.width}x${MAX_DIMENSIONS.height} pixels.`,
      (value) => {
        if (!value) return false;
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const meetsDimensions =
                img.width >= MIN_DIMENSIONS.width &&
                img.height >= MIN_DIMENSIONS.height &&
                img.width <= MAX_DIMENSIONS.width &&
                img.height <= MAX_DIMENSIONS.height;
              resolve(meetsDimensions);
            };
            img.src = e.target?.result as string;
          };
          reader.readAsDataURL(value);
        });
      },
    ),
});

type Schema = InferType<typeof schema>;

const state = reactive<Partial<Schema>>({
  name: "",
  description: undefined,
  image: undefined,
});

async function handleCreateFood(event: FormSubmitEvent<Schema>) {
  isLoading.value = true;

  const food = await createFood({
    name: event.data.name,
    description: event.data.description,
  } as CreateFoodRequest);

  if (event.data.image) {
    await addImage(event.data.image);
  }

  isLoading.value = false;

  await router.push(`/food/${food?.id}`);
}
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col">
    <h2 class="text-xl py-8 font-bold text-primary">New Food</h2>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="handleCreateFood"
    >
      <UFormField label="Name" name="name">
        <UInput v-model="state.name" class="w-full" />
      </UFormField>
      <UFormField label="Description" name="description">
        <UTextarea v-model="state.description" class="w-full" />
      </UFormField>
      <UFormField label="Image" name="image" description="Optional">
        <UFileUpload
          v-model="state.image"
          icon="i-lucide-image"
          accept="image/*"
          label="Drop your image here"
          description="PNG, JPG or GIF (max. 20MB)"
          class="w-full min-h-48"
        />
      </UFormField>
      <UButton type="submit" :loading="isLoading" label="Submit" />
    </UForm>
  </div>
</template>
