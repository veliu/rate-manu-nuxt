import { $fetch, type FetchOptions } from "ofetch";

import FoodModule from "~/repository/modules/food";
import { useSessionStore } from "~/store/session.store";

export type IApiInstance = {
  food: FoodModule;
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const { token } = storeToRefs(useSessionStore());

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer ${token.value?.token}`,
    },
  };

  // Create a new instance of $fetcher with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    food: new FoodModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
