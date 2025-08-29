import type { FoodCollectionResponse, Sorting } from "ratemanu-api-client";

export type SortingOption = {
  propertyName: string;
  direction: "asc" | "desc";
  label: string;
};

export type SearchCriteria = {
  limit: number;
  offset: number;
  sorting?: Sorting[];
  filter?: Filter[];
};

export type Filter = {
  entity: string;
  propertyName: string;
  operator: string;
  value: string | number | boolean;
};

export type useSearchReturn = {
  makeSearch(criteria: Ref<SearchCriteria>): Promise<FoodCollectionResponse>;
  buildSearchCriteria(
    criteria: Ref<SearchCriteria>,
    selectedSorting: Ref<string>,
  ): SearchCriteria;
  sortingOptions: SortingOption[];
};

export function useSearch(): useSearchReturn {
  const { $foodApi } = useNuxtApp();

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
  ): Promise<FoodCollectionResponse> {
    const { data } = await $foodApi.foodSearch(
      criteria.value.offset,
      criteria.value.limit,
    );

    return data;
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

  return {
    makeSearch,
    buildSearchCriteria,
    sortingOptions,
  };
}
