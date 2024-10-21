import type { Ref } from "vue";
import HttpFactory from "../factory";
import type { AsyncDataOptions } from "#app";
import type {
  CreateFoodRequest,
  Food,
  FoodCollection,
  SearchCriteria,
  Token,
  UpdateFoodImageRequest,
} from "~/types/ApiTypes";
import type { FetchOptions } from "ofetch";
import { useSessionStore } from "~/store/session.store";

class FoodModule extends HttpFactory {
  private RESOURCE = "/food";

  private store = storeToRefs(useSessionStore());

  async get(foodId: string, asyncDataOptions?: AsyncDataOptions<Food>) {
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.store.bearerToken.value}`,
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
          Authorization: `Bearer ${this.store.bearerToken.value}`,
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

  async search(
    searchCriteria: SearchCriteria,
    asyncDataOptions?: AsyncDataOptions<FoodCollection>,
  ) {
    const searchParamString = new URLSearchParams(
      buildQueryParams(searchCriteria),
    ).toString();
    return useAsyncData(() => {
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.store.bearerToken.value}`,
          "Accept-Language": "en-US",
        },
      };
      return this.call<FoodCollection>(
        "GET",
        `${this.RESOURCE}/?${searchParamString}`,
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
          Authorization: `Bearer ${this.store.bearerToken.value}`,
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
      const fetchOptions: FetchOptions<"json"> = {
        headers: {
          Authorization: `Bearer ${this.store.bearerToken.value}`,
          "Accept-Language": "en-US",
        },
      };
      const formData = new FormData();
      formData.append("image", request.image);
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
