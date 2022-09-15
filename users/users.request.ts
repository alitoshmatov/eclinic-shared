import { IsEnum, IsNotEmpty, IsString, NotEquals } from "class-validator";
import IsPhoneNumber from "shared/decorators/is-phone-number";
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

  @IsPhoneNumber()
  phoneNumber: string;

  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  role: Role;
}

export class UpdateUser extends PartialType(CreateUser) {}
