import type {
  Food,
  FoodComment,
  FoodCommentCollection,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

export type useFoodCommentReturn = {
  comments: ComputedRef<FoodComment[]>;
  addComment(comment: Ref<string>): Promise<FoodComment | undefined>;
};

export function useFoodComment(food: Ref<Food>): useFoodCommentReturn {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();
  const { token } = storeToRefs(useSessionStore());

  const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
    headers: {
      Authorization: `Bearer ${token.value?.token}`,
      "Accept-Language": "en-US",
    },
  }));

  const latestComment = ref<FoodComment | undefined>(undefined);

  async function fetchComments(foodId: string) {
    return $apiFetcher<FoodCommentCollection>(`/food/${foodId}/comment`, {
      method: "GET",
      ...fetchOptions.value,
    });
  }

  const { data: _foodComments } = useAsyncData<FoodCommentCollection>(
    "fetch-comments" + food.value.id,
    () => fetchComments(food.value.id),
    { watch: [food, latestComment] },
  );

  async function createComment(foodId: string, comment: string) {
    return $apiFetcher<FoodComment>(`/food/${foodId}/comment`, {
      method: "POST",
      body: { comment: comment },
      ...fetchOptions.value,
    });
  }

  async function addComment(
    comment: Ref<string>,
  ): Promise<FoodComment | undefined> {
    try {
      latestComment.value = await createComment(food.value.id, comment.value);
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

  return {
    comments: computed(() => _foodComments.value?.items ?? []),
    addComment,
  };
}
