import { PaymentType } from "../common/common";

interface InvoiceLines {
  service: {
    name: string;
    code: number;
  };
  price: number;
  quantity: number;
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
  };
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
  user: User;
  customer: Customer;
  invoiceLines: InvoiceLines[];
  deletedAt: string | null;
  deletedByUser: User | null;
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
}
