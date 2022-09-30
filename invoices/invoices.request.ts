import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from "class-validator";
import { Transform, Type } from "class-transformer";
import { PaymentType } from "../common/common";

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

export class UpdateInvoice {
  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsArray()
  @ArrayMinSize(1)
  @IsOptional()
  @ValidateNested({
    each: true,
  })
  @Type(() => Line)
  lines?: Line[];
}

export class UpdatePayment {
  @IsEnum(PaymentType)
  paymentType: PaymentType;
}

export class InvoiceListQuery {
  @IsString()
  @IsOptional()
  q?: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => (value === "true" ? true : value === "false" ? false : undefined))
  isPaid?: boolean;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => (value === "true" ? true : value === "false" ? false : undefined))
  isDeleted?: boolean;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  finishDate?: string;
}
