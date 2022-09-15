import { IsEnum, IsNotEmpty,  IsOptional, IsString,  Matches, NotEquals } from "class-validator";

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
  @Matches( /\+998\d{9}$/)
  phoneNumber: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  role: Role;
}

export class UpdateUser {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  @IsOptional()
  role: Role;
}
