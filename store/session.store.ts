import { defineStore } from "pinia";
import type { Token } from "~/types/ApiTypes";

export const useSessionStore = defineStore(
  "session",
  () => {
    const sessionToken = reactive<Token>({
      token: "",
      refresh_token: "",
    });

    function updateToken(token: Token) {
      sessionToken.token = token.token;
      sessionToken.refresh_token = token.refresh_token;
    }

    return {
      sessionToken,
      updateToken,
    };
  },
  { persist: true },
);
