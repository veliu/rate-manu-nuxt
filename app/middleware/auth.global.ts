import { useSessionStore } from "~/store/session.store";
import type { AxiosError } from "axios";
import { AuthenticationApi, Configuration } from "ratemanu-api-client";

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.name === "login") return;
  if (import.meta.server) return;

  const { refreshToken, bearerToken } = storeToRefs(useSessionStore());
  const toast = useToast();

  if (!refreshToken.value) {
    toast.add({
      id: "session-expired",
      title: "Session expired!",
      icon: "i-heroicons-exclamation-triangle",
      color: "error",
    });

    return navigateTo("/login");
  }

  const config = useRuntimeConfig();

  const apiConfig = new Configuration({
    basePath: config.public.apiBaseUrl,
  });

  const authenticationApi = new AuthenticationApi(apiConfig);

  if (!refreshToken.value) return;

  try {
    const { data } = await authenticationApi.tokenRefresh(refreshToken.value, {
      params: {
        refresh_token: refreshToken.value,
      },
    });

    bearerToken.value = data.token;
    refreshToken.value = data.refresh_token;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<{ message: string }>;
    toast.add({
      id: "session-expired",
      title: axiosError.response?.data?.message ?? "Session expired!",
      icon: "i-heroicons-exclamation-triangle",
      color: "error",
    });
    console.error(error);
    return navigateTo("/login");
  }
});
