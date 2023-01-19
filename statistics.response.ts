import { Gender, PaymentType } from "./common/common";

export interface CountByGender {
  [Gender.FEMALE]: number;
  [Gender.MALE]: number;
}

interface doctor {
  id: string;
  firstName: string;
  lastName: string;
  sum: number;
}

interface department {
  id: string;
  name: string;
  sum: number;
}

export type paymentTypes = { [k in PaymentType]: number };

// @deprecated
export interface IncomeStatistics {
  doctors: doctor[];
  departments: department[];
  paymentTypes: paymentTypes;
}

export interface DiscountStatistics {
  _sum: {
    discount: number;
  };
  discountId: string | null;
}

export interface TodayStatistics {
  income: {
    sum: string;
    paymentType: PaymentType;
  }[];
  sales: {
    sum: string;
    unpaid: string;
    invoiceCount: number;
    visitors: number;
  };
  newCustomerCount: number;
}

export interface DailyIncome {
  income: {
    sum: string;
    date: string;
  }[];
  sales: {
    date: string;
    sum: string;
    unpaid: string;
  }[];
  total: {
    sum: string;
    paymentType: PaymentType;
  }[];
}

export interface DailyCustomers {
  visitors: {
    date: string;
    count: number;
  }[];
  newCustomers: {
    date: string;
    count: number;
  }[];
  totalCount: {
    [k in Gender]: number;
  };
  overallCount: {
    [k in Gender]: number;
  };
}

export type IncomeByDoctor = {
  id: string;
  firstName: string;
  lastName: string;
  sum: string;
};

export type IncomeByDepartment = {
  id: string;
  name: string;
  sum: string;
};

export interface DiscountAll {
  id: string;
  name: string;
  sum: string;
}
