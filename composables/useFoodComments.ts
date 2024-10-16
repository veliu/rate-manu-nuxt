import type { FoodComment, FoodCommentCollection } from "~/types/ApiTypes";

export type useFoodCommentsReturn = {
  loadComments(): Promise<void>;
  createComment: (comment: string) => Promise<FoodComment | undefined>;
  loading: Ref<boolean>;
  comments: Ref<FoodComment[]>;
};

export function useFoodComments(
  foodId: MaybeRefOrGetter<string>,
): useFoodCommentsReturn {
  const food = toRef(foodId);
  const { $api } = useNuxtApp();
  const loading = ref(false);
  const toast = useToast();

  const comments: Ref<FoodComment[]> = ref([]);

  async function createComment(
    comment: MaybeRefOrGetter<string>,
  ): Promise<FoodComment | undefined> {
    loading.value = true;
    const newComment = toRef(comment);
    const { data, error, status } = await $api.foodComment.create(
      food.value,
      newComment.value,
    );

    if (status === "error") {
      console.log(error.value);
      toast.add({
        id: "create-comment-failed",
        title: "Could not create comment",
        description: error.value,
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
    loading.value = false;
    return data as FoodComment | undefined;
  }

  async function loadComments(): Promise<void> {
    loading.value = true;
    const { data, error, status } = await $api.foodComment.getAll(food.value);

    if (status === "error") {
      console.log(error.value);
      toast.add({
        id: "create-comment-failed",
        title: "Could not get comments",
        description: error.value,
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });

      return;
    }

    if (status.value === "success") {
      comments.value = data.value.items as FoodComment[];
    }

    loading.value = false;
  }

  return {
    loadComments,
    createComment,
    loading,
    comments,
  };
}
