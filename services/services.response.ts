export type Service = {
  id: string;
  code: number;
  name: string;
  description: string;
  department: {
    name: string;
    id: string;
  };
  price: number;
};
