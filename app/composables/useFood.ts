import { useSessionStore } from "~/store/session.store";
import type {
  GroupResponse,
  FoodResponse,
  GroupMemberResponse,
  UpdateFoodRequest,
  CreateFoodRequest,
} from "ratemanu-api-client";

import type { AxiosError } from "axios";

export type useFoodReturn = {
  createdBy: ComputedRef<string>;
  assignedToGroup: ComputedRef<string>;
  deleteProduct(): Promise<void>;
  addImage(file: File): Promise<FoodResponse | undefined>;
  updateFood(
    request: Ref<UpdateFoodRequest>,
  ): Promise<FoodResponse | undefined>;
  createFood(request: CreateFoodRequest): Promise<FoodResponse | undefined>;
};

export function useFood(food: Ref<FoodResponse | undefined>): useFoodReturn {
  const { user: me } = storeToRefs(useSessionStore());
  const { myGroups } = useGroups();

  const { $foodApi, $foodImagesApi } = useNuxtApp();
  const toast = useToast();
  const router = useRouter();

  const _createdBy = ref<string>("unknown");
  const _assignedToGroup = ref<string>("unknown");

  myGroups.value?.items.forEach((group: GroupResponse) => {
    if (group.id === food.value?.group) {
      _assignedToGroup.value = group.name;
    }
    group.members.forEach((member: GroupMemberResponse) => {
      if (member.id === food.value?.author) {
        _createdBy.value = member.name ?? member.email;
      }
    });
  });

  if (me.value?.id === food.value?.author) {
    _createdBy.value = "you";
  }

  async function deleteProduct(): Promise<void> {
    if (!food.value) return;
    try {
      $foodApi.foodDelete(food.value.id);
      toast.add({
        id: "delete-food-success" + food.value.id,
        title: "Product deleted!",
        icon: "i-heroicons-face-smile",
      });
      await router.push("/");
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "delete-food-failed" + food.value.id,
        title:
          axiosError.response?.data?.message ?? "Could not delete product.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function addImage(file: File): Promise<FoodResponse | undefined> {
    if (!food.value) return;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await $foodImagesApi.foodImagesUpdate(
        food.value.id,
        file,
      );
      return data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "add-image-failed" + food.value.id,
        title: axiosError.response?.data?.message ?? "Could not add image.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function putFood(
    foodId: string,
    request: UpdateFoodRequest,
  ): Promise<FoodResponse | undefined> {
    if (!food.value) return;
    try {
      const { data } = await $foodApi.foodUpdate(foodId, request);
      return data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "update-food-failed" + food.value.id,
        title:
          axiosError.response?.data?.message ?? "Could not update product.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
    }
  }

  async function updateFood(
    request: Ref<UpdateFoodRequest>,
  ): Promise<FoodResponse | undefined> {
    if (!food.value) return;
    try {
      const { data } = await $foodApi.foodUpdate(food.value.id, request.value);
      food.value = data;
      toast.add({
        id: "update-food-success" + food.value.id,
        title: "Food updated!",
        icon: "i-heroicons-face-smile",
      });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "update-food-failed" + food.value.id,
        title:
          axiosError.response?.data?.message ?? "Could not update product.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function createFood(
    request: CreateFoodRequest,
  ): Promise<FoodResponse | undefined> {
    try {
      const { data } = await $foodApi.foodCreate(request);
      toast.add({
        id: "create-food-success" + data.id,
        title: "Food created!",
        icon: "i-heroicons-face-smile",
      });
      food.value = data;
      return data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "create-food-failed",
        title:
          axiosError.response?.data?.message ?? "Could not create product.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  return {
    createdBy: computed(() => _createdBy.value),
    assignedToGroup: computed(() => _assignedToGroup.value),
    deleteProduct,
    addImage,
    updateFood,
    createFood,
  };
}
