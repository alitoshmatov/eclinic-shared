import { Gender } from "shared/common/common";

export interface Customer {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  gender: Gender;
  id: string;
  address: string | null;
  isSelfRegistered: boolean;
  telegramId: string | null;
}

export interface ICustomerList extends Omit<Customer, "address"> {}
