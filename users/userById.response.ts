import { Role } from "./users.request";

export type User = {
  id: string;
  firstName: string;
  lastName: string | null;
  username: string;
  role: Role;
  phoneNumber: string | null;
};
