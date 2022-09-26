import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { Gender } from "../common/common";

export class CreateCustomer {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @Matches(/\+998\d{9}$/)
  phoneNumber: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDateString()
  birthDate: string;

  @IsOptional()
  @IsString()
  address: string;
}

export class UpdateCustomer {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  lastName?: string;

  @IsString()
  @Matches(/\+998\d{9}$/)
  @IsOptional()
  phoneNumber?: string;

  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @IsDateString()
  @IsOptional()
  birthDate?: string;

  @IsOptional()
  @IsString()
  @IsOptional()
  address?: string;
}

export interface CustomersListQuery {
  q: string;
}
