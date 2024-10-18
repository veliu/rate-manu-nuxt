import { $fetch, type FetchOptions } from "ofetch";

import FoodModule from "~/repository/modules/food";
import FoodRatingModule from "~/repository/modules/food-rating";
import FoodCommentModule from "~/repository/modules/food-comment";
import UserModule from "~/repository/modules/user";
import { useSessionStore } from "~/store/session.store";

export type IApiInstance = {
  food: FoodModule;
  foodRating: FoodRatingModule;
  foodComment: FoodCommentModule;
  user: UserModule;
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const { token } = storeToRefs(useSessionStore());

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer ${token.value}`,
    },
  };

  // Create a new instance of $fetcher with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    food: new FoodModule(apiFetcher),
    foodRating: new FoodRatingModule(apiFetcher),
    foodComment: new FoodCommentModule(apiFetcher),
    user: new UserModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
