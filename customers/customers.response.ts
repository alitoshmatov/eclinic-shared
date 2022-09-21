import { Gender } from "shared/common/common";

export interface Customer {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  gender: Gender;
  id: string;
  address?: string;
}

export interface ICustomerList extends Customer {}
