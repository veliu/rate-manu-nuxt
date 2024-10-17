import { $fetch, type FetchOptions } from "ofetch";

// locals
import AuthModule from "~/repository/modules/auth";
import FoodModule from "~/repository/modules/food";
import FoodRatingModule from "~/repository/modules/food-rating";
import FoodCommentModule from "~/repository/modules/food-comment";
import UserModule from "~/repository/modules/user";
import type { Token } from "~/types/ApiTypes";

export type IApiInstance = {
  auth: AuthModule;
  food: FoodModule;
  foodRating: FoodRatingModule;
  foodComment: FoodCommentModule;
  user: UserModule;
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer ${loginCookie.value?.token}`,
    },
  };

  // Create a new instance of $fetcher with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
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
