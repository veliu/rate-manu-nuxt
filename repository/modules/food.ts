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

class FoodModule extends HttpFactory {
  private RESOURCE = "/food";

  private loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  async get(foodId: string, asyncDataOptions?: AsyncDataOptions<Food>) {
    return useAsyncData(() => {
      return this.call<Food>("GET", `${this.RESOURCE}/${foodId}`);
    }, asyncDataOptions);
  }

  async delete(foodId: string, asyncDataOptions?: AsyncDataOptions<undefined>) {
    return useAsyncData(() => {
      return this.call<undefined>(
        "DELETE",
        `${this.RESOURCE}/${foodId}`,
        undefined,
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
      return this.call<FoodCollection>(
        "GET",
        `${this.RESOURCE}/?${searchParamString}`,
        undefined,
      );
    }, asyncDataOptions);
  }

  async create(
    request: CreateFoodRequest,
    asyncDataOptions?: AsyncDataOptions<Food>,
  ) {
    return useAsyncData(() => {
      return this.call<Food>("POST", `${this.RESOURCE}/`, request);
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
      return this.call<Food>(
        "POST",
        `${this.RESOURCE}/${foodId}/update-image`,
        formData,
      );
    }, asyncDataOptions);
  }
}

export default FoodModule;
