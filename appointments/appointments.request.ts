import { ArrayMinSize, IsArray, IsDateString, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateAppointment {
  @IsUUID()
  doctorId: string;

  @IsUUID()
  @IsOptional()
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

  @IsUUID()
  @IsOptional()
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
  doctors?: string[];

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  finishDate?: string;
}
