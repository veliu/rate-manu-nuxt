import type { GroupResponse } from "~/types/GroupResponse";

export type GroupsResponse = {
  count: number;
  items: Array<GroupResponse>;
};
