import type { FetchOptions } from "ofetch";
import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  CreateFoodRequest,
  Food,
  FoodCollection,
  Token,
  UpdateFoodImageRequest,
} from "~/types/ApiTypes";

class FoodModule extends HttpFactory {
  private RESOURCE = "/food";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async get(foodId: string, asyncDataOptions?: AsyncDataOptions<Food>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
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

  async delete(foodId: string, asyncDataOptions?: AsyncDataOptions<undefined>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.loginCookie.value.token}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<undefined>(
        "DELETE",
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
          Authorization: `Bearer ${this.loginCookie.value.token}`,
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
          Authorization: `Bearer ${this.loginCookie.value.token}`,
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
          Authorization: `Bearer ${this.loginCookie.value.token}`,
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
