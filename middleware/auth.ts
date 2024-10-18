import type { Token } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (from.name === "login") return;
  if (import.meta.server) return;

  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();

  const { sessionToken } = storeToRefs(useSessionStore());

  const { status, data } = await useAsyncData<Token>(() => {
    return $apiFetcher<Token>("/token/refresh", {
      method: "POST",
      body: {
        refresh_token: sessionToken.value?.refresh_token,
      },
    });
  });

  if (status.value !== "success") {
    toast.add({
      id: "session-expired",
      title: "Session expired",
      description: "Please login again",
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
    });
    return navigateTo("/login");
  }

  sessionToken.value = data.value as Token;
});
