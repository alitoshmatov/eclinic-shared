export interface Department {
  id: string;
  generalId: string;
  name: string;
}

export interface DepartmentList extends Department {
  isActive: boolean;
}
