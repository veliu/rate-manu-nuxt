import { $fetch, type FetchOptions } from "ofetch";

// locals
import AuthModule from "~/repository/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl,
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    auth: new AuthModule(apiFecther),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
