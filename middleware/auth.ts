import type { Ref } from "vue";
import type { Token } from "~/types/ApiTypes";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();

  const loginCookie = useCookie<Token>("ratemanu-login");

  if (typeof loginCookie.value == undefined) {
    toast.add({
      id: "session-expired",
      title: "Session expired",
      description: "Please login again",
      icon: "i-heroicons-exclamation-triangle",
      color: "red",
    });
    return navigateTo("/login");
  }

  const { status, data } = await useAsyncData<Token>(() => {
    return $apiFetcher<Token>("/token/refresh", {
      method: "POST",
      body: {
        refresh_token: loginCookie.value?.refresh_token,
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

  loginCookie.value = data.value as Token;
});
