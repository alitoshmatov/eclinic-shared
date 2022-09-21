import { Role } from "./users.request";

export interface User {
  id: string;
  firstName: string;
  lastName: string | null;
  username: string;
  role: Role;
  departments: { id: string; name: string }[];
  phoneNumber: string | null;
}

export interface IUserList extends User {}
