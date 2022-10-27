import { IsNumber, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

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

export class UpdateService {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  departmentId?: string;
}

export class ServiceListQuery {
  @IsString()
  @IsOptional()
  q?: string;

  @IsUUID()
  @IsOptional()
  department?: string;
}
