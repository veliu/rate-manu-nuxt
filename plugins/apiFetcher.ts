import { $fetch, type FetchOptions } from "ofetch";

import type { Token } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const { token } = storeToRefs(useSessionStore());

  const bearerToken = computed(() => token.value?.token);

  const globalFetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    headers: {
      Authorization: "Bearer " + bearerToken.value,
      "Accept-Language": "en-US",
    },
  };

  return {
    provide: {
      apiFetcher: $fetch.create(globalFetchOptions),
    },
  };
});
