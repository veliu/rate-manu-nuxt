import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  FoodComment,
  FoodCommentCollection,
  Token,
} from "~/types/ApiTypes";

class FoodCommentModule extends HttpFactory {
  private RESOURCE = "/food";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async create(
    foodId: string,
    comment: string,
    asyncDataOptions?: AsyncDataOptions<FoodComment>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodComment>(
        "POST",
        `${this.RESOURCE}/${foodId}/comment`,
        {
          comment: comment,
        },
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async getAll(
    foodId: string,
    asyncDataOptions?: AsyncDataOptions<FoodCommentCollection>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodCommentCollection>(
        "GET",
        `${this.RESOURCE}/${foodId}/comment`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default FoodCommentModule;
