import type { Food } from "~/types/Food";

export type FoodCollection = {
  count: number;
  items: Array<Food>;
};
