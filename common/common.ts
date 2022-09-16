export enum ErrorCode {
  INVALID_TOKEN = "INVALID_TOKEN",
  NOT_FOUND = "NOT_FOUND",
  EXPIRED_TOKEN = "EXPIRED_TOKEN",
  LIMIT_PERMISSION = "LIMITED_PERMISSION",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export interface PaginationParams {
  page: number;
  limit?: number;
}

export interface Pagination<T> {
  list: T[];
  count: number;
}
