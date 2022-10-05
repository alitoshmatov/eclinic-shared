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

type paymentTypes = { [k in PaymentType]: number };

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
