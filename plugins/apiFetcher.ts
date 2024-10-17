import { $fetch, type FetchOptions } from "ofetch";

import type { Token } from "~/types/ApiTypes";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const loginCookie = useCookie("ratemanu-login") as Ref<Token>;

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
    headers: {
      "Accept-Language": "en-US",
      Authorization: `Bearer ${loginCookie.value?.token}`,
    },
  };

  return {
    provide: {
      apiFetcher: $fetch.create(fetchOptions),
    },
  };
});
