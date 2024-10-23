import type { Food, GroupResponse, UpdateFoodRequest } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

export type useFoodReturn = {
  createdBy: ComputedRef<string>;
  assignedToGroup: ComputedRef<string>;
  deleteProduct(): Promise<void>;
  addImage(file: File): Promise<Food | undefined>;
  updateFood(request: Ref<UpdateFoodRequest>): Promise<void>;
};

export function useFood(food: Ref<Food>): useFoodReturn {
  const { user: me } = storeToRefs(useSessionStore());
  const { myGroups } = useGroups();

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

  let _createdBy = ref<string>("unknown");
  let _assignedToGroup = ref<string>("unknown");

  myGroups.value?.forEach((group: GroupResponse) => {
    if (group.id === food.value?.group) {
      _assignedToGroup.value = group.name;
    }
    group.members.forEach((member) => {
      if (member.id === food.value?.author) {
        _createdBy.value = member.name ?? member.email;
      }
    });
  });

  if (me.value?.id === food.value?.author) {
    _createdBy.value = "you";
  }

  async function deleteProduct(): Promise<void> {
    try {
      $apiFetcher<undefined>("/food/" + food.value.id, {
        method: "DELETE",
        ...fetchOptions.value,
      });
      toast.add({
        id: "delete-food-success" + food.value.id,
        title: "Product deleted!",
        icon: "i-heroicons-face-smile",
      });
      await router.push("/");
    } catch (error) {
      toast.add({
        id: "delete-food-failed" + food.value.id,
        title: "Could not delete product!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  async function addImage(file: File): Promise<Food | undefined> {
    const formData = new FormData();
    formData.append("image", file);

    try {
      return await $apiFetcher<Food>(`/food/${food.value.id}/update-image`, {
        method: "POST",
        body: formData,
        ...fetchOptions.value,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function putFood(
    foodId: string,
    request: UpdateFoodRequest,
  ): Promise<Food | undefined> {
    return $apiFetcher<Food>(`/food/${foodId}`, {
      method: "PUT",
      body: request,
      ...fetchOptions.value,
    });
  }

  async function updateFood(request: Ref<UpdateFoodRequest>): Promise<void> {
    try {
      food.value = (await putFood(food.value.id, request.value)) as Food;
      toast.add({
        id: "update-food-success" + food.value.id,
        title: "Food updated!",
        icon: "i-heroicons-face-smile",
      });
    } catch (error) {
      console.error(error);
      toast.add({
        id: "update-food-failed" + food.value.id,
        title: "Could not update product!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  return {
    createdBy: computed(() => _createdBy.value),
    assignedToGroup: computed(() => _assignedToGroup.value),
    deleteProduct,
    addImage,
    updateFood,
  };
}
