import type { FoodApi, UserApi, AuthenticationApi, FoodImagesApi, FoodRatingApi, FoodCommentsApi, FoodIngredientsApi, IngredientApi } from "ratemanu-api-client";

declare module "#app" {
  interface NuxtApp {
    $authenticationApi: AuthenticationApi;
    $userApi: UserApi;
    $foodApi: FoodApi;
    $foodImagesApi: FoodImagesApi
    $foodRatingApi: FoodRatingApi
    $foodCommentsApi: FoodCommentsApi
    $ingredientApi: IngredientApi
    $foodIngredients: FoodIngredientsApi
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $authenticationApi: AuthenticationApi;
    $userApi: UserApi;
    $foodApi: FoodApi;
    $foodImagesApi: FoodImagesApi
    $foodRatingApi: FoodRatingApi
    $foodCommentsApi: FoodCommentsApi
    $ingredientApi: IngredientApi
    $foodIngredients: FoodIngredientsApi
  }
}

export {};
