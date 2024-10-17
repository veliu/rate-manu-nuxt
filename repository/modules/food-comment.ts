import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FoodComment, FoodCommentCollection } from "~/types/ApiTypes";

class FoodCommentModule extends HttpFactory {
  private RESOURCE = "/food";

  async create(
    foodId: string,
    comment: string,
    asyncDataOptions?: AsyncDataOptions<FoodComment>,
  ) {
    return useAsyncData(() => {
      return this.call<FoodComment>(
        "POST",
        `${this.RESOURCE}/${foodId}/comment`,
        {
          comment: comment,
        },
      );
    }, asyncDataOptions);
  }

  async getAll(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodCommentCollection>,
  ) {
    return useAsyncData(() => {
      return this.call<FoodCommentCollection>(
        "GET",
        `${this.RESOURCE}/${foodId}/comment`,
      );
    }, asyncDataOptions);
  }
}

export default FoodCommentModule;
