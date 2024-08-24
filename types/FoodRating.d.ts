import type { GroupMember } from "~/types/GroupMember";

export type FoodRating = {
  id: string;
  food: string;
  rating: number;
  createdBy: GroupMember;
  createdAt: Date;
  updatedAt: Date;
};
