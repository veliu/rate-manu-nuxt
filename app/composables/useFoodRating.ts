import type { Food, FoodRating, FoodRatingCollection } from "~/types/ApiTypes";
import type { FetchOptions } from "ofetch";
import { useSessionStore } from "~/store/session.store";

export type useFoodRatingReturn = {
  ratings: ComputedRef<FoodRating[]>;
  personalRating: ComputedRef<FoodRating | null>;
  updateRating(
    rating: MaybeRefOrGetter<number>,
  ): Promise<FoodRating | undefined>;
};

export function useFoodRating(food: Ref<Food>): useFoodRatingReturn {
  const { $apiFetcher } = useNuxtApp();
  const { token } = storeToRefs(useSessionStore());
  const toast = useToast();

  const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
    headers: {
      Authorization: `Bearer ${token.value?.token}`,
      "Accept-Language": "en-US",
    },
  }));

  async function fetchRatings(foodId: string): Promise<FoodRatingCollection> {
    return $apiFetcher<FoodRatingCollection>("/food-rating/" + foodId, {
      method: "GET",
      ...fetchOptions.value,
    });
  }

  const fetchPersonalRating = async (foodId: string): Promise<FoodRating> => {
    return $apiFetcher<FoodRating>("/food-rating/my/" + foodId, {
      method: "GET",
      ...fetchOptions.value,
    });
  };

  const { data: _personalRating } = useAsyncData(
    "fetch-personal-food-rating" + food.value.id,
    () => fetchPersonalRating(food.value.id),
    { watch: [food] },
  );

  const { data: _ratings } = useAsyncData<FoodRatingCollection>(
    "fetch-food-rating" + food.value.id,
    () => fetchRatings(food.value.id),
    { watch: [food, _personalRating] },
  );

  async function upsertPersonalRating(
    foodId: string,
    rating: number,
  ): Promise<FoodRating> {
    return $apiFetcher<FoodRating>("/food-rating/", {
      method: "POST",
      body: {
        food: foodId,
        rating: rating,
      },
      ...fetchOptions.value,
    });
  }

  async function updateRating(
    rating: MaybeRefOrGetter<number>,
  ): Promise<FoodRating | undefined> {
    const _rating = toRef(rating);
    try {
      _personalRating.value = await upsertPersonalRating(
        food.value.id,
        _rating.value,
      );
      return _personalRating.value as FoodRating;
    } catch (error) {
      toast.add({
        id: "update-rating-failed",
        title: "Could not update rating",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
      console.error(error);
    }
  }

  return {
    ratings: computed(() => _ratings.value?.items ?? []),
    personalRating: computed(() => _personalRating.value),
    updateRating,
  };
}
