import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";
import type { FoodRating } from "~/types/FoodRating";
import type { UpsertFoodRatingRequest } from "~/types/UpsertFoodRatingRequest";

class FoodRatingModule extends HttpFactory {
  private RESOURCE = "/food-rating";

  private token = useCookie("ratemanu-login").value?.token ?? "";

  async getPersonalRating(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodRating>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.token}`,
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
          Authorization: `Bearer ${this.token}`,
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
