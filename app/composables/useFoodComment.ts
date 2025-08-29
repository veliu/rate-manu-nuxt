import type {
  CommentCollectionResponse,
  CommentResponse,
  FoodResponse,
} from "ratemanu-api-client";

export type useFoodCommentReturn = {
  comments: ComputedRef<CommentResponse[]>;
  addComment(comment: Ref<string>): Promise<CommentResponse | undefined>;
};

export function useFoodComment(food: Ref<FoodResponse>): useFoodCommentReturn {
  const { $foodCommentsApi } = useNuxtApp();
  const toast = useToast();

  const latestComment = ref<CommentResponse | undefined>(undefined);

  async function fetchComments(foodId: string) {
    const { data } = await $foodCommentsApi.foodCommentsGet(foodId);
    return data;
  }

  const { data: _foodComments } = useAsyncData<CommentCollectionResponse>(
    "fetch-comments" + food.value.id,
    () => fetchComments(food.value.id),
    { watch: [food, latestComment] },
  );

  async function createComment(foodId: string, comment: string) {
    const { data } = await $foodCommentsApi.foodCommentsCreate(foodId, {
      comment: comment,
    });
    return data;
  }

  async function addComment(
    comment: Ref<string>,
  ): Promise<CommentResponse | undefined> {
    try {
      latestComment.value = await createComment(food.value.id, comment.value);
    } catch (error) {
      toast.add({
        id: "create-comment-failed",
        title: "Could not create comment",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
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
