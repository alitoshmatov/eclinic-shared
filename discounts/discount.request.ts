import {
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
} from "@alitoshmatov/class-validator";
import { IsOptional } from "class-validator";
import { Transform } from "class-transformer";

export class CreateDiscount {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;
}

export class DiscountsQuery {
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) =>
    value === "true" ? true : value === "false" ? false : undefined
  )
  all?: boolean;
}
