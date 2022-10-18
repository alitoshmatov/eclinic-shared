export interface CustomerHistory {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  quantity: number;
  price: number;
  note: string;
  service: {
    id: string;
    name: string;
  };
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
  };
  invoice: {
    id: string;
    isPaid: boolean;
    code: string;
  };
}

export interface DoctorHistory {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  note: string;
  quantity: number;
  service: {
    id: string;
    name: string;
  };
  invoice: {
    id: string;
    code: string;
    isPaid: boolean;
    customer: {
      id: string;
      firstName: string;
      lastName: string;
    };
  };
}
