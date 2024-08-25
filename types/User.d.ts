export type User = {
  id: string;
  email: string;
  status?: string;
  groups: string[];
  name: string | undefined;
};
