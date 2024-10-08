import type { Food, GroupResponse } from "~/types/ApiTypes";

export type useFoodReturn = {
  createdBy: string;
  assignedToGroup: string;
};

export async function useFood(food: Food): Promise<useFoodReturn> {
  const { $api } = useNuxtApp();
  const { data: me } = await $api.user.getMe();
  const { data: myGroups } = await $api.user.myGroups();

  let createdBy = "unknown";
  let assignedToGroup = "unknown";

  myGroups.value?.items.forEach((group: GroupResponse) => {
    if (group.id === food.group) {
      assignedToGroup = group.name;
    }
    group.members.forEach((member) => {
      if (member.id === food.author) {
        createdBy = member.name ?? member.email;
      }
    });
  });

  if (me.value?.id === food.author) {
    createdBy = "me";
  }

  return {
    createdBy,
    assignedToGroup,
  };
}
