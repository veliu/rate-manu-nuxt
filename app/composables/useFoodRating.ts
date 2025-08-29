import type {
  FoodResponse,
  PersonalRatingResponse,
  RatingCollectionResponse,
} from "ratemanu-api-client";

export type useFoodRatingReturn = {
  ratings: ComputedRef<PersonalRatingResponse[]>;
  personalRating: ComputedRef<PersonalRatingResponse | undefined>;
  updateRating(
    rating: MaybeRefOrGetter<number>,
  ): Promise<PersonalRatingResponse | undefined>;
};

export function useFoodRating(food: Ref<FoodResponse>): useFoodRatingReturn {
  const { $foodRatingApi } = useNuxtApp();
  const toast = useToast();

  async function fetchRatings(
    foodId: string,
  ): Promise<RatingCollectionResponse> {
    const { data } = await $foodRatingApi.foodRatingGet(foodId);
    return data;
  }

  const fetchPersonalRating = async (
    foodId: string,
  ): Promise<PersonalRatingResponse> => {
    const { data } = await $foodRatingApi.foodRatingGetPersonal(foodId);
    return data;
  };

  const { data: _personalRating } = useAsyncData(
    "fetch-personal-food-rating" + food.value.id,
    () => fetchPersonalRating(food.value.id),
    { watch: [food] },
  );

  const { data: _ratings } = useAsyncData<RatingCollectionResponse>(
    "fetch-food-rating" + food.value.id,
    () => fetchRatings(food.value.id),
    { watch: [food, _personalRating] },
  );

  async function upsertPersonalRating(
    foodId: string,
    rating: number,
  ): Promise<PersonalRatingResponse> {
    const { data } = await $foodRatingApi.foodRatingUpsert({
      food: foodId,
      rating: rating,
    });
    return data;
  }

  async function updateRating(
    rating: MaybeRefOrGetter<number>,
  ): Promise<PersonalRatingResponse | undefined> {
    const _rating = toRef(rating);
    try {
      _personalRating.value = await upsertPersonalRating(
        food.value.id,
        _rating.value,
      );
      return _personalRating.value as PersonalRatingResponse;
    } catch (error) {
      toast.add({
        id: "update-rating-failed",
        title: "Could not update rating",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
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
