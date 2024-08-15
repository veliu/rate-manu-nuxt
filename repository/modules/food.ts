import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";
import type { FoodCollection } from "~/types/FoodCollection";
import type { Food } from "~/types/Food";
import type { CreateFoodRequest } from "~/types/CreateFoodRequest";

class FoodModule extends HttpFactory {
  private RESOURCE = "/food";

  private token = useCookie("ratemanu-login").value?.token ?? "";

  async search(asyncDataOptions?: AsyncDataOptions<FoodCollection>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodCollection>(
        "GET",
        `${this.RESOURCE}/`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

  async create(
    request: CreateFoodRequest,
    asyncDataOptions?: AsyncDataOptions<Food>,
  ) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<Food>(
        "POST",
        `${this.RESOURCE}/`,
        request,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default FoodModule;
