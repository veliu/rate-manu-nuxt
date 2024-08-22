import type { GroupMember } from "~/types/GroupMember";

export type GroupResponse = {
  id: string;
  name: string;
  role: String<"owner" | "member">;
  members: Array<GroupMember>;
};
