import { IsNotEmpty, IsString } from "@alitoshmatov/class-validator";

export class changePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
