export interface Service {
  id: string;
  code: string;
  name: string;
  description: string;
  department: {
    name: string;
    id: string;
  };
  price: number;
}

export interface IServiceList extends Service {}
