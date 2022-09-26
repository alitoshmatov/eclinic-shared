export enum ErrorCode {
  INVALID_TOKEN = "INVALID_TOKEN",
  NOT_FOUND = "NOT_FOUND",
  EXPIRED_TOKEN = "EXPIRED_TOKEN",
  LIMITED_PERMISSION = "LIMITED_PERMISSION",
  DELETED_ITEM = "DELETED_ITEM",
  INVALID_RELATION = "INVALID_RELATION",
  UNIQUE_CONSTRAINT = "UNIQUE_CONSTRAINT",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface Option {
  label: string;
  value: string | number;
}

export interface PaginationParams {
  page: number;
  limit?: number;
}

export interface Pagination<T> {
  list: T[];
  count: number;
}
