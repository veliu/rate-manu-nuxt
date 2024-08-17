import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";
import type { FoodRating } from "~/types/FoodRating";
import type { UpsertFoodRatingRequest } from "~/types/UpsertFoodRatingRequest";
import type { Token } from "~/types/Token";
import type { Ref } from "vue";

class FoodRatingModule extends HttpFactory {
  private RESOURCE = "/food-rating";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async getPersonalRating(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodRating>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodRating>(
        "GET",
        `${this.RESOURCE}/${foodId}`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async upsert(
    request: UpsertFoodRatingRequest,
    asyncDataOptions?: AsyncDataOptions<FoodRating>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodRating>(
        "POST",
        `${this.RESOURCE}/`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default FoodRatingModule;
