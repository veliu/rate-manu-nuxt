import { $fetch, type FetchOptions } from "ofetch";

// locals
import AuthModule from "~/repository/modules/auth";
import FoodModule from "~/repository/modules/food";
import FoodRatingModule from "~/repository/modules/food-rating";
import UserModule from "~/repository/modules/user";

export type IApiInstance = {
  auth: AuthModule;
  food: FoodModule;
  foodRating: FoodRatingModule;
  user: UserModule;
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  };

  // Create a new instance of $fetcher with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    food: new FoodModule(apiFetcher),
    foodRating: new FoodRatingModule(apiFetcher),
    user: new UserModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
