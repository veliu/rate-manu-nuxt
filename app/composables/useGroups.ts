import { useSessionStore } from "~/store/session.store";
import { storeToRefs } from "pinia";
import type {
  GroupCollectionResponse,
  GroupResponse,
  InviteUserToGroupRequest,
} from "~/types/ApiTypes";
import type { FetchOptions } from "ofetch";

export type useGroupsReturn = {
  fetchGroups(): Promise<void>;
  myGroups: ComputedRef<GroupResponse[]>;
  inviteUserToGroup(request: InviteUserToGroupRequest): Promise<void>;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.add({
        id: "fetch-groups-failed",
        title: "Could not get groups!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
    }
  }

  async function inviteUserToGroup(
    request: InviteUserToGroupRequest,
  ): Promise<void> {
    try {
      await $apiFetcher<GroupCollectionResponse>("/user/invite", {
        method: "POST",
        body: request,
        ...fetchOptions.value,
      });
      toast.add({
        id: "invite-user-success",
        title: "Invitation send!",
        icon: "i-heroicons-face-smile",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.add({
        id: "invite-user-failed",
        title: "Could not invite user!",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
    }
  }

  return {
    fetchGroups,
    myGroups: computed(() => _groups.value),
    inviteUserToGroup,
  };
}
