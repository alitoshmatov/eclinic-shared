import { IsEnum, IsNotEmpty, IsString, NotEquals } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

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
  phoneNumber: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  role: Role;
}

export class UpdateUser extends PartialType(CreateUser) {}
