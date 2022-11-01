import {
  IsArray,
  IsDateString,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";
import { Transform } from "class-transformer";

export class CreateAppointment {
  @IsUUID()
  doctorId: string;
  // @IsUUID()
  @IsOptional()
  @IsString()
  customerId?: string;


  @IsDateString()
  startTime: string;

  @IsDateString()
  finishTime: string;

  @IsString()
  @IsOptional()
  note?: string;
}

export class UpdateAppointment {
  @IsUUID()
  @IsOptional()
  doctorId?: string;

  // @IsUUID()
  @IsOptional()
  @IsString()
  customerId?: string;

  @IsDateString()
  @IsOptional()
  startTime?: string;

  @IsDateString()
  @IsOptional()
  finishTime?: string;

  @IsString()
  @IsOptional()
  note?: string;
}

export class AppointmentListQuery {
  @IsUUID(undefined, {
    each: true,
  })
  @IsOptional()
  @IsArray()
  @Transform(({ value }) => value.split(","))
  doctors?: string[];

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  finishDate?: string;
}
