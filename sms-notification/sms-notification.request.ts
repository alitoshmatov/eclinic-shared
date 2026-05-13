import {
  IsBoolean,
  IsDivisibleBy,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  ArrayMaxSize,
  ArrayMinSize,
} from "class-validator";

export enum SmsNotificationType {
  APPOINTMENT_CREATED = "APPOINTMENT_CREATED",
  APPOINTMENT_UPDATED = "APPOINTMENT_UPDATED",
  APPOINTMENT_REMINDER = "APPOINTMENT_REMINDER",
  INVOICE_PAYMENT_CONFIRMED = "INVOICE_PAYMENT_CONFIRMED",
  CHECKUP_REMINDER = "CHECKUP_REMINDER",
  BIRTHDAY_GREETING = "BIRTHDAY_GREETING",
}

export enum SmsLanguage {
  UZ = "UZ",
  RU = "RU",
}

export enum SmsLogStatus {
  SENT = "SENT",
  FAILED = "FAILED",
  SKIPPED = "SKIPPED",
}

export class UpdateSmsNotificationConfig {
  @IsBoolean()
  isEnabled: boolean;

  @IsEnum(SmsLanguage)
  @IsOptional()
  language?: SmsLanguage;

  @IsOptional()
  @IsInt({ each: true })
  @Min(5, { each: true })
  @Max(1440, { each: true })
  @IsDivisibleBy(5, { each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(5)
  reminderMinutesBefore?: number[];

  @IsInt()
  @IsOptional()
  @Min(30)
  @Max(365)
  checkupDays?: number;
}

export class UpdateSmsSettings {
  @IsBoolean()
  @IsOptional()
  quietHoursEnabled?: boolean;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(23)
  quietHoursStart?: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(23)
  quietHoursEnd?: number;
}

export class SendTestSmsRequest {
  @IsString()
  @Matches(/\+998\d{9}$/)
  phoneNumber: string;

  @IsEnum(SmsLanguage)
  @IsOptional()
  language?: SmsLanguage;
}

export interface SmsLogListQuery {
  page?: number;
  limit?: number;
  phoneNumber?: string;
  type?: SmsNotificationType;
  status?: SmsLogStatus;
  startDate?: string;
  finishDate?: string;
}
