import type { User } from "~/types/User";

export type GroupResponse = {
  uuid: string;
  name: string;
  members: Array<User>;
};
