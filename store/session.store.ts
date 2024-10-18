import { defineStore } from "pinia";
import type { Token } from "~/types/ApiTypes";

export const useSessionStore = defineStore(
  "session",
  () => {
    const sessionToken = reactive<Token>({
      token: "",
      refresh_token: "",
    });

    const token = ref("");
    const refresh_token = ref("");

    const tokenObject = computed(() => ({
      token: token.value,
      refresh_token: refresh_token.value,
    }));

    return {
      token,
      refresh_token,
      tokenObject,
    };
  },
  { persist: true },
);
