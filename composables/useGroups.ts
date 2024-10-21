import type {
  ConfirmRegistrationRequest,
  GroupCollectionResponse,
  GroupResponse,
  LoginRequest,
  PutMeRequest,
  RegisterRequest,
  Token,
  User,
} from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";
import type { FetchOptions } from "ofetch";

export type useGroupsReturn = {
  fetchGroups(): Promise<void>;
  myGroups: ComputedRef<GroupResponse[]>;
};
export function useGroups(): useGroupsReturn {
  const { $apiFetcher } = useNuxtApp();
  const toast = useToast();
  const { token } = storeToRefs(useSessionStore());

  const fetchOptions: ComputedRef<FetchOptions<"json">> = computed(() => ({
    headers: {
      Authorization: `Bearer ${token.value?.token}`,
      "Accept-Language": "en-US",
    },
  }));

  const _groups = ref<GroupResponse[]>([]);

  async function fetchGroups(): Promise<void> {
    try {
      const response = await $apiFetcher<GroupCollectionResponse>(
        "/user/my-groups",
        {
          method: "GET",
          ...fetchOptions.value,
        },
      );

      _groups.value = response.items;
    } catch (error) {
      toast.add({
        id: "fetch-groups-failed",
        title: "Could not get groups!",
        icon: "i-heroicons-exclamation-triangle",
        color: "red",
      });
    }
  }

  return {
    fetchGroups,
    myGroups: computed(() => _groups.value),
  };
}
