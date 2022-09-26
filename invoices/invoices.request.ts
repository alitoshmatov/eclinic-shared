import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsUUID,
  Min,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

export class Line {
  @IsUUID()
  serviceId: string;

  @IsUUID()
  @IsOptional()
  doctorId?: string;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateInvoice {
  @IsUUID()
  customerId: string;

  @IsOptional()
  @IsNumber()
  discount: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({
    each: true,
  })
  @Type(() => Line)
  lines: Line[];
}
