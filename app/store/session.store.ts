import { defineStore } from "pinia";
import type { UserResponse } from "ratemanu-api-client";

export const useSessionStore = defineStore(
  "session",
  () => {
    const bearerToken = ref<string | undefined | null>(null);
    const refreshToken = ref<string | undefined | null>(null);

    const token = computed(() => ({
      token: bearerToken.value,
      refresh_token: refreshToken.value,
    }));
    const user = ref<UserResponse | undefined>(undefined);

    function resetSession() {
      bearerToken.value = "";
      refreshToken.value = "";
      user.value = undefined;
    }

    return {
      bearerToken,
      refreshToken,
      token,
      user,
      resetSession,
    };
  },
  { persist: true },
);
