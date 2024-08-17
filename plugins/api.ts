import { $fetch, type FetchOptions } from "ofetch";

// locals
import AuthModule from "~/repository/modules/auth";
import FoodModule from "~/repository/modules/food";
import FoodRatingModule from "~/repository/modules/food-rating";

interface IApiInstance {
  auth: AuthModule;
  food: FoodModule;
  foodRating: FoodRatingModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(apiFecther),
    food: new FoodModule(apiFecther),
    foodRating: new FoodRatingModule(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
