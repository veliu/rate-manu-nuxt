import type {
  Food,
  FoodCollection,
  SearchCriteria,
  Sorting,
} from "~/types/ApiTypes";
import type { FetchOptions } from "ofetch";
import { useSessionStore } from "~/store/session.store";
import { computed } from "vue";

export type SortingOption = {
  propertyName: string;
  direction: "asc" | "desc";
  label: string;
};

export type useSearchReturn = {
  makeSearch(criteria: Ref<SearchCriteria>): Promise<FoodCollection>;
  buildSearchCriteria(
    criteria: Ref<SearchCriteria>,
    selectedSorting: Ref<string>,
  ): SearchCriteria;
  sortingOptions: SortingOption[];
  getFood(id: Ref<string>): Promise<Food>;
};

export function useSearch(): useSearchReturn {
  const { $apiFetcher } = useNuxtApp();
  const { token } = storeToRefs(useSessionStore());

  const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
    headers: {
      Authorization: `Bearer ${token.value?.token}`,
      "Accept-Language": "en-US",
    },
  }));

  const sortingOptions: SortingOption[] = [
    {
      propertyName: "averageRating",
      direction: "asc",
      label: "Avg rating ascending",
    },
    {
      propertyName: "averageRating",
      direction: "desc",
      label: "Avg rating descending",
    },
    { propertyName: "name", direction: "asc", label: "Name ascending" },
    { propertyName: "name", direction: "desc", label: "Name descending" },
  ];

  async function makeSearch(
    criteria: Ref<SearchCriteria>,
  ): Promise<FoodCollection> {
    const searchParamString = new URLSearchParams(
      buildQueryParams(criteria.value),
    ).toString();

    return await $apiFetcher<FoodCollection>(`/food/?${searchParamString}`, {
      method: "GET",
      ...fetchOptions.value,
    });
  }

  const getSortingOptionByLabel = (label: string): Sorting => {
    return sortingOptions.find((option) => option.label === label) as Sorting;
  };

  const buildSearchCriteria = (
    criteria: Ref<SearchCriteria>,
    selectedSorting: Ref<string>,
  ): SearchCriteria => {
    const sortingOption = getSortingOptionByLabel(selectedSorting.value);
    return {
      ...criteria.value,
      sorting: [
        {
          propertyName: sortingOption.propertyName,
          direction: sortingOption.direction,
        },
      ],
    };
  };

  const getFood = async (foodId: Ref<string>): Promise<Food> => {
    return await $apiFetcher<Food>(`/food/${foodId.value}`, {
      method: "GET",
      ...fetchOptions.value,
    });
  };

  return {
    makeSearch,
    buildSearchCriteria,
    sortingOptions,
    getFood,
  };
}
