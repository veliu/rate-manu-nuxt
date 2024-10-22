import type {
  Food,
  FoodRating,
  FoodRatingCollection,
  GroupResponse,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

export type useFoodReturn = {
  createdBy: string;
  assignedToGroup: string;
  updateRating(rating: Ref<number>): Promise<FoodRating>;
  personalRating: ComputedRef<FoodRating | null>;
  deleteProduct(): Promise<void>;
  ratings: ComputedRef<FoodRating[]>;
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

  let createdBy = "unknown";
  let assignedToGroup = "unknown";

  myGroups.value?.forEach((group: GroupResponse) => {
    if (group.id === food.value?.group) {
      assignedToGroup = group.name;
    }
    group.members.forEach((member) => {
      if (member.id === food.value?.author) {
        createdBy = member.name ?? member.email;
      }
    });
  });

  if (me.value?.id === food.value?.author) {
    createdBy = "me";
  }

  const updateRating = async (rating: Ref<number>): Promise<FoodRating> => {
    return $apiFetcher<FoodRating>("/food-rating/", {
      method: "POST",
      body: {
        food: food.value.id,
        rating: rating.value,
      },
      ...fetchOptions.value,
    });
  };

  const { data: _personalRating } = useAsyncData(
    "fetch-rating",
    () =>
      $apiFetcher<FoodRating>(`/food-rating/my/${food.value.id}`, {
        method: "GET",
        ...fetchOptions.value,
      }),
    { watch: [food] },
  );

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

  const { data: _ratings } = useAsyncData<FoodRatingCollection>(
    "fetch-food-rating" + food.value.id,
    () => {
      return $apiFetcher<FoodRatingCollection>(
        "/food-rating/" + food.value.id,
        {
          method: "GET",
          ...fetchOptions.value,
        },
      );
    },
    { watch: [food] },
  );

  return {
    createdBy,
    assignedToGroup,
    updateRating,
    personalRating: computed(() => _personalRating.value),
    deleteProduct,
    ratings: computed(() => _ratings.value?.items ?? []),
  };
}
