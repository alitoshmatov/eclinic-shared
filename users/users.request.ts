import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  NotEquals,
  ValidateIf,
} from "class-validator";

export enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  RECEPTIONIST = "RECEPTIONIST",
  DOCTOR = "DOCTOR",
}

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @Matches(/\+998\d{9}$/)
  phoneNumber: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  role: Role | null;

  @ValidateIf((item) => item.role === Role.DOCTOR)
  @IsUUID(undefined, {
    each: true,
  })
  departmentIds: string[];
}

export class UpdateUser {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  @Matches(/\+998\d{9}$/)
  phoneNumber?: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  @IsOptional()
  role?: Role | null;

  @IsUUID(undefined, {
    each: true,
  })
  @IsOptional()
  departmentIds?: string[];
}

export class UsersListQuery {
  @IsString()
  @IsOptional()
  q?: string;

  @IsOptional()
  @IsUUID()
  department?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
