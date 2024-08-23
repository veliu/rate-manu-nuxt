import type { Food } from "~/types/Food";

export type useFoodReturn = {
  createdBy: Ref<string>;
  assignedToGroup: Ref<string>;
};

const { $api } = useNuxtApp();

export async function useFood(food: Food): Promise<useFoodReturn> {
  const { data: me } = await $api.user.me();
  const { data: myGroups } = await $api.user.myGroups();

  const createdBy = ref("unknown");
  const assignedToGroup = ref("unknown");

  if (me.value?.id === food.author) {
    createdBy.value = "me";
  } else {
    myGroups.value?.items.forEach((group) => {
      if (group.id === food.group) {
        assignedToGroup.value = group.name;
      }
      group.members.forEach((member) => {
        if (member.id === food.author) {
          createdBy.value = member.email;
        }
      });
    });
  }
  return {
    createdBy,
    assignedToGroup,
  };
}
