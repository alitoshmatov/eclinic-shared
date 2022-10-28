import { Role } from "../users/users.request";

export type GetMeResponse = {
  id: string;
  firstName: string;
  lastName: string | null;
  username: string;
  phoneNumber: string | null;
  role: Role; //role enum
  tenant: {
    id: string;
    name: string;
    code: string;
    doctorLimit: number;
    address: string | null;
    phoneNumber: string | null;
    link: string | null;
    startTime: string | null;
    finishTime: string | null;
  };
};
