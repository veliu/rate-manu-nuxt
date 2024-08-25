import type { Ref } from "vue";
import type { Token } from "~/types/ApiTypes";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const loginCookie = useCookie("ratemanu-login") as Ref<Token | null>;

  if (typeof loginCookie.value == undefined) {
    return navigateTo("/login");
  }

  const token: Token = {
    token: <string>loginCookie.value?.token,
    refresh_token: <string>loginCookie.value?.refresh_token,
  };

  const { $api } = useNuxtApp();

  const { data, status } = await $api.auth.refreshToken(token.refresh_token);

  if (status.value !== "success") {
    return navigateTo("/login");
  }

  loginCookie.value = data.value;
});
