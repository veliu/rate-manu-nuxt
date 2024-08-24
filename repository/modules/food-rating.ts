import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FoodRating } from "~/types/FoodRating";
import type { UpsertFoodRatingRequest } from "~/types/UpsertFoodRatingRequest";
import type { Token } from "~/types/Token";
import type { PersonalFoodRating } from "~/types/PersonalFoodRating";
import type { FoodRatingCollection } from "~/types/FoodRatingCollection";

class FoodRatingModule extends HttpFactory {
  private RESOURCE = "/food-rating";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async getPersonalRating(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<PersonalFoodRating>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<PersonalFoodRating>(
        "GET",
        `${this.RESOURCE}/my/${foodId}`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async getRatings(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodRatingCollection>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodRatingCollection>(
        "GET",
        `${this.RESOURCE}/${foodId}`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async upsert(
    request: UpsertFoodRatingRequest,
    asyncDataOptions?: AsyncDataOptions<PersonalFoodRating>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<PersonalFoodRating>(
        "POST",
        `${this.RESOURCE}/`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default FoodRatingModule;
