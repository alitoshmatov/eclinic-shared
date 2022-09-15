import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateService {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsUUID()
  departmentId: string;
}

export class UpdateService extends PartialType(CreateService) {}
