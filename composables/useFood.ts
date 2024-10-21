import type { Food, GroupResponse } from "~/types/ApiTypes";
import { useSessionStore } from "~/store/session.store";

export type useFoodReturn = {
  createdBy: string;
  assignedToGroup: string;
};

export async function useFood(food: Food): Promise<useFoodReturn> {
  const { user: me } = storeToRefs(useSessionStore());
  const { myGroups } = useGroups();

  let createdBy = "unknown";
  let assignedToGroup = "unknown";

  myGroups.value?.forEach((group: GroupResponse) => {
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
