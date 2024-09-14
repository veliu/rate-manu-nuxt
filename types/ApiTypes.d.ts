export type PutMeRequest = {
  name: string;
};
export type RegisterRequest = {
  email: string;
  password: string;
};
export type ConfirmRegistrationRequest = {
  token: string;
};
export type Token = {
  token: string;
  refresh_token: string;
};
export type LoginRequest = {
  username: string;
  password: string;
};
export type User = {
  id: string;
  email: string;
  status?: string;
  groups: string[];
  name: string | undefined;
};
export type GroupMember = {
  id: string;
  email: string;
  status: string;
  name: string | null;
};
export type GroupResponse = {
  id: string;
  name: string;
  role: String<"owner" | "member">;
  members: Array<GroupMember>;
};
export type GroupCollectionResponse = {
  count: number;
  items: GroupResponse[];
};
export type InviteUserToGroupRequest = {
  email: string;
  group: string;
};
export type Food = {
  id: string;
  name: string;
  description?: string | null;
  author: string;
  group: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
  averageRating: number;
  ratings?: string[];
  personalRating: FoodRating | null;
};
export type FoodCollection = {
  count: number;
  items: Array<Food>;
};
export type CreateFoodRequest = {
  id?: string;
  name: string;
  description?: string | null;
};
export type UpdateFoodImageRequest = {
  image: string | File;
};
export type FoodRating = {
  id: string;
  food: string;
  rating: number;
  createdBy: GroupMember;
  createdAt: Date;
  updatedAt: Date;
};
export type FoodRatingCollection = {
  count: number;
  items: FoodRating[];
};
export type UpsertFoodRatingRequest = {
  food: string;
  rating: number;
};
export type Sorting = {
  propertyName: string;
  direction: 'desc'|'asc'
}
export type SearchCriteria = {
  limit: number,
  offset: number,
  sorting?: Sorting[]
}
