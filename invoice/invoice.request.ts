import { IsInt, IsNumber, IsOptional, IsUUID, Min, ValidateNested } from "class-validator";

export class Line {
  @IsUUID()
  serviceId: string;

  @IsUUID()
  doctorId: string;

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

  @ValidateNested()
  lines: Line[];
}

export class UpdateInvoice {
  @IsUUID()
  customerId?: string;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @ValidateNested()
  lines?: Line[];
}
