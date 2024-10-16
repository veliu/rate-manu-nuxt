import type { User } from "~/types/ApiTypes";
import { createSharedComposable } from "@vueuse/core";

export type useContextReturn = {
  me: Ref<User | undefined>;
  refreshUser(): Promise<User | undefined>;
};

export function useContextFunction(): useContextReturn {
  const { $api } = useNuxtApp();

  const me = ref<User>();

  async function refreshUser(): Promise<User | undefined> {
    const { data: user } = await $api.user.getMe();
    me.value = user.value;
    return user.value;
  }

  return {
    me,
    refreshUser,
  };
}

export const useContext = createSharedComposable(useContextFunction);
