import type {
  Food,
  FoodComment,
  FoodCommentCollection,
  FoodRating,
  FoodRatingCollection,
  GroupResponse,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

export type useFoodReturn = {
  createdBy: string;
  assignedToGroup: string;
  updateRating(rating: Ref<number>): Promise<FoodRating | undefined>;
  personalRating: ComputedRef<FoodRating | null>;
  deleteProduct(): Promise<void>;
  ratings: ComputedRef<FoodRating[]>;
  comments: ComputedRef<FoodComment[]>;
  createComment(comment: Ref<string>): Promise<FoodComment | undefined>;
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

  const latestRating = ref<FoodRating | undefined>(undefined);

  async function updateRating(
    rating: Ref<number>,
  ): Promise<FoodRating | undefined> {
    try {
      latestRating.value = await $apiFetcher<FoodRating>("/food-rating/", {
        method: "POST",
        body: {
          food: food.value.id,
          rating: rating.value,
        },
        ...fetchOptions.value,
      });
    } catch (error) {
      toast.add({
        id: "update-rating-failed",
        title: "Could not update rating",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
      console.error(error);
    }

    return latestRating.value;
  }

  const { data: _personalRating } = useAsyncData(
    "fetch-rating" + food.value.id,
    () =>
      $apiFetcher<FoodRating>(`/food-rating/my/${food.value.id}`, {
        method: "GET",
        ...fetchOptions.value,
      }),
    { watch: [food] },
  );

  const fetchComments = (foodId: string) => {
    return $apiFetcher<FoodCommentCollection>(`/food/${foodId}/comment`, {
      method: "GET",
      ...fetchOptions.value,
    });
  };

  const latestComment = ref<FoodComment | undefined>(undefined);

  const { data: _foodComments } = useAsyncData<FoodCommentCollection>(
    "fetch-comments" + food.value.id,
    () => fetchComments(food.value.id),
    { watch: [food, latestComment] },
  );

  async function createComment(
    comment: Ref<string>,
  ): Promise<FoodComment | undefined> {
    try {
      latestComment.value = await $apiFetcher<FoodComment>(
        `/food/${food.value.id}/comment`,
        {
          method: "POST",
          body: { comment: comment.value },
          ...fetchOptions.value,
        },
      );
    } catch (error) {
      toast.add({
        id: "create-comment-failed",
        title: "Could not create comment",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
      console.error(error);
    }
    return latestComment.value;
  }

  const fetchRatings = (foodId: string) => {
    return $apiFetcher<FoodRatingCollection>("/food-rating/" + foodId, {
      method: "GET",
      ...fetchOptions.value,
    });
  };

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
    () => fetchRatings(food.value.id),
    { watch: [food, latestRating] },
  );

  return {
    createdBy,
    assignedToGroup,
    updateRating,
    personalRating: computed(() => _personalRating.value),
    deleteProduct,
    ratings: computed(() => _ratings.value?.items ?? []),
    comments: computed(() => _foodComments.value?.items ?? []),
    createComment,
  };
}
