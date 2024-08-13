import type { Token } from "~/types/Token";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const cookie = useCookie("ratemanu-login");

  if (typeof cookie.value == undefined) {
    return navigateTo("/login");
  }

  const token: Token = {
    token: <string>cookie.value?.token,
    refresh_token: <string>cookie.value?.refresh_token,
  };

  const { $api } = useNuxtApp();

  const { data, status } = await $api.auth.refreshToken(token.refresh_token);

  if (status.value !== "success") {
    return navigateTo("/login");
  }

  cookie.value = data.value;
});
