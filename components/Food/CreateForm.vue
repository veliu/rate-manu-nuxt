<script setup lang="ts">
import { object, string, mixed } from "yup";
import type { CreateFoodRequest, Food } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

const isLoading = ref(false);

const { $apiFetcher } = useNuxtApp();
const toast = useToast();
const { token } = storeToRefs(useSessionStore());
const router = useRouter();

const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
  headers: {
    Authorization: `Bearer ${token.value?.token}`,
    "Accept-Language": "en-US",
  },
}));

const file: Ref<File | null> = ref(null);

const createFoodRequest = computed<CreateFoodRequest>(() => ({
  name: state.name,
  description: state.description,
}));

const fileToBig = ref(false);

const schema = object({
  name: string().required("Required"),
  description: string(),
  image: mixed().test("fileSize", "The file is too large", (value) => {
    if (!value || !Array.isArray(value)) return true;
    return value[0].size <= 8388608;
  }),
});

const state = reactive({
  name: "",
  description: undefined,
  image: undefined,
});

const setImage = async (fileList: FileList) => {
  file.value = fileList.item(0);
  let fileSize = file?.value?.size ?? 0;
  fileToBig.value = fileSize > 8388608;
};

async function createFood() {
  isLoading.value = true;

  const formData = new FormData();

  try {
    const newFood = await $apiFetcher<Food>("/food/", {
      method: "POST",
      body: createFoodRequest.value,
      ...fetchOptions.value,
    });

    if (file.value && !fileToBig.value) {
      formData.append("image", file.value);

      await $apiFetcher<Food>(`/food/${newFood.id}/update-image`, {
        method: "POST",
        body: formData,
        ...fetchOptions.value,
      });
    }

    await router.push(`/food/${newFood.id}`);
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

watch(fileToBig, () => {
  toast.add({
    id: "file-to-big",
    title: "File size max 20MB",
    icon: "i-heroicons-exclamation-triangle",
    color: "red",
  });
});
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col sm:px-6 lg:px-8">
    <h2 class="text-xl py-8 font-bold text-primary">New Food</h2>
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="createFood"
    >
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Description" name="description">
        <UTextarea v-model="state.description" />
      </UFormGroup>
      <UFormGroup label="Image" name="image">
        <UInput v-model="state.image" type="file" @change="setImage" />
        <p v-if="fileToBig" class="text-red-500 my-2 text-xs">
          File to big. Max 20 MB allowed.
        </p>
      </UFormGroup>
      <UButton type="submit" :loading="isLoading"> Submit</UButton>
    </UForm>
  </div>
</template>
