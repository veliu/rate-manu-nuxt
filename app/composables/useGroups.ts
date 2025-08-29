import type {
  InviteUserRequest,
  UserGroupsResponse,
} from "ratemanu-api-client";
import type { AxiosError } from "axios";

export type useGroupsReturn = {
  fetchGroups(): Promise<void>;
  myGroups: ComputedRef<UserGroupsResponse | undefined>;
  inviteUserToGroup(request: InviteUserRequest): Promise<void>;
};
export function useGroups(): useGroupsReturn {
  const { $userApi } = useNuxtApp();
  const toast = useToast();

  const _groups = ref<UserGroupsResponse | undefined>(undefined);

  async function fetchGroups(): Promise<void> {
    try {
      const { data } = await $userApi.userGroups();
      _groups.value = data;
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "fetch-groups-failed",
        title: axiosError.response?.data?.message ?? "Could not fetch groups.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  async function inviteUserToGroup(request: InviteUserRequest): Promise<void> {
    try {
      $userApi.userInvite(request);
      toast.add({
        id: "invite-user-success",
        title: "Invitation send!",
        icon: "i-heroicons-face-smile",
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.add({
        id: "invite-user-failed",
        title: axiosError.response?.data?.message ?? "Could not invite user.",
        icon: "i-heroicons-exclamation-triangle",
        color: "error",
      });
      console.error(error);
    }
  }

  return {
    fetchGroups,
    myGroups: computed(() => _groups.value),
    inviteUserToGroup,
  };
}
