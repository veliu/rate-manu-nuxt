import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  FoodRating,
  FoodRatingCollection,
  UpsertFoodRatingRequest,
} from "~/types/ApiTypes";

class FoodRatingModule extends HttpFactory {
  private RESOURCE = "/food-rating";

  async getPersonalRating(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodRating>,
  ) {
    return useAsyncData(() => {
      return this.call<FoodRating>("GET", `${this.RESOURCE}/my/${foodId}`);
    }, asyncDataOptions);
  }

  async getRatings(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodRatingCollection>,
  ) {
    return useAsyncData(() => {
      return this.call<FoodRatingCollection>(
        "GET",
        `${this.RESOURCE}/${foodId}`,
      );
    }, asyncDataOptions);
  }

  async upsert(
    request: UpsertFoodRatingRequest,
    asyncDataOptions?: AsyncDataOptions<FoodRating>,
  ) {
    return useAsyncData(() => {
      return this.call<FoodRating>("POST", `${this.RESOURCE}/`, request);
    }, asyncDataOptions);
  }
}

export default FoodRatingModule;
