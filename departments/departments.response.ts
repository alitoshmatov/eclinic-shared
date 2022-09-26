export interface Department {
  id: string;
  generalId: string;
  name: string;
}

export interface IDepartmentList extends Department {
  isActive: boolean;
}
