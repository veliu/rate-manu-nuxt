import { defineStore } from "pinia";
import type { User } from "~/types/ApiTypes";

export const useSessionStore = defineStore(
  "session",
  () => {
    const bearerToken = ref("");
    const refreshToken = ref("");

    const token = computed(() => ({
      token: bearerToken.value,
      refresh_token: refreshToken.value,
    }));
    const user = ref<User | undefined>(undefined);

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
