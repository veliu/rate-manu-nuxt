import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type { FetchOptions } from "ofetch";
import type { FoodCollection } from "~/types/FoodCollection";
import type { Food } from "~/types/Food";
import type { CreateFoodRequest } from "~/types/CreateFoodRequest";
import type { UpdateFoodImageRequest } from "~/types/UpdateFoodImageRequest";

class FoodModule extends HttpFactory {
  private RESOURCE = "/food";

  private token = useCookie("ratemanu-login").value?.token ?? "";

  async get(foodId: string, asyncDataOptions?: AsyncDataOptions<Food>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<Food>(
        "GET",
        `${this.RESOURCE}/${foodId}`,
        undefined,
        fetchOptions,
      );
    }, asyncDataOptions);
  }

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

  async updateImage(
    foodId: string,
    request: UpdateFoodImageRequest,
    asyncDataOptions?: AsyncDataOptions<Food>,
  ) {
    return useAsyncData(() => {
      const formData = new FormData();
      formData.append("image", request.image);
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<Food>(
        "POST",
        `${this.RESOURCE}/${foodId}/update-image`,
        formData,
        fetchOptions,
      );
    }, asyncDataOptions);
  }
}

export default FoodModule;
