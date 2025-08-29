import type { FoodApi, UserApi, AuthenticationApi, FoodImagesApi, FoodRatingApi, FoodCommentsApi } from "ratemanu-api-client";

declare module "#app" {
  interface NuxtApp {
    $authenticationApi: AuthenticationApi;
    $userApi: UserApi;
    $foodApi: FoodApi;
    $foodImagesApi: FoodImagesApi
    $foodRatingApi: FoodRatingApi
    $foodCommentsApi: FoodCommentsApi
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
  }
}

export {};
