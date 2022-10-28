import {
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class changePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}

export class TenantDetailsUpdate {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  qrLink?: string;

  @IsMilitaryTime()
  @IsOptional()
  @IsString()
  startTime?: string;

  @IsMilitaryTime()
  @IsOptional()
  @IsString()
  finishTime?: string;
}
