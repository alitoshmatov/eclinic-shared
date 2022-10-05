import { IsString, MaxLength, MinLength } from "@alitoshmatov/class-validator";

export class CreateDiscount {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;
}
