import { IDiscountList } from "../discounts/discount.response";
import { PaymentType } from "../common/common";

export interface InvoiceLines {
  id: string;
  note: string;
  updatedAt: string | null;
  service: {
    id: string;
    name: string;
    code: string;
  };
  price: number;
  quantity: number;
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
}

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

interface User {
  id: string;
  firstName: string;
  lastName: null | string;
}

export interface Invoice {
  id: string;
  code: string;
  createdAt: string;
  isPaid: boolean;
  discount: number;
  discountType: IDiscountList;
  user: User;
  customer: Customer;
  invoiceLines: InvoiceLines[];
  deletedAt: string | null;
  deletedByUser: User | null;
  paymentType?: PaymentType;
  paidAt: string | null;
  paidByUser: User | null;
}

export interface IInvoiceList {
  id: string;
  code: string;
  createdAt: string;
  customer: {
    id: string;
    firstName: string;
    lastName: string;
  };
  invoiceLines: [
    {
      price: number;
      quantity: number;
    }
  ];
  discount: number;
  isPaid: boolean;
  paymentType: PaymentType | null;
  deletedAt?: string;
}
