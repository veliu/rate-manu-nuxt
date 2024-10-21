import type { Token } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (from.name === "login") return;
  if (import.meta.server) return;

  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();

  const { token, refreshToken, bearerToken } = storeToRefs(useSessionStore());

  try {
    const response = await $apiFetcher<Token>("/token/refresh", {
      method: "POST",
      body: {
        refresh_token: token.value.refresh_token,
      },
      headers: {
        "Accept-Language": "en-US",
        Authorization: "Bearer " + token.value.token,
      },
    });

    bearerToken.value = response.token;
    refreshToken.value = response.refresh_token;
  } catch (error) {
    toast.add({
      id: "session-expired",
      title: "Session expired",
      description: "Please login again",
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
    });
    return navigateTo("/login");
  }
});
