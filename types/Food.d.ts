export type Food = {
  id: string;
  name: string;
  description?: string | null;
  author: string;
  group: string;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
};
