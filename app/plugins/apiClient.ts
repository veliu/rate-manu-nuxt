import {
  AuthenticationApi,
  Configuration,
  FoodApi,
  FoodCommentsApi,
  FoodImagesApi,
  FoodIngredientsApi,
  FoodRatingApi,
  IngredientApi,
  UserApi,
} from "ratemanu-api-client";
import { useSessionStore } from "~/store/session.store";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const { bearerToken } = storeToRefs(useSessionStore());

  // dynamic config with accessToken as function
  const apiConfig = new Configuration({
    basePath: config.public.apiBaseUrl,
    accessToken: () => bearerToken.value || "", // always up-to-date
  });

  const authenticationApi = new AuthenticationApi(apiConfig);
  const userApi = new UserApi(apiConfig);
  const foodApi = new FoodApi(apiConfig);
  const foodImagesApi = new FoodImagesApi(apiConfig);
  const foodRatingApi = new FoodRatingApi(apiConfig);
  const foodCommentsApi = new FoodCommentsApi(apiConfig);
  const ingredientApi = new IngredientApi(apiConfig);
  const foodIngredientsApi = new FoodIngredientsApi(apiConfig);

  return {
    provide: {
      authenticationApi,
      userApi,
      foodApi,
      foodImagesApi,
      foodRatingApi,
      foodCommentsApi,
      ingredientApi,
      foodIngredientsApi,
    },
  };
});
