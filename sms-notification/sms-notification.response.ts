import { SmsLanguage, SmsLogStatus, SmsNotificationType } from "./sms-notification.request";

export interface ISmsTemplatePreview {
  text: string;
  length: number;
  segments: number;
  encoding: "gsm7" | "unicode";
  perSegment: number;
}

export interface ISmsNotificationConfig {
  id: string | null;
  type: SmsNotificationType;
  isEnabled: boolean;
  language: SmsLanguage;
  params: {
    reminderMinutesBefore?: number[];
    checkupDays?: number;
  };
  templatePreviews: Record<SmsLanguage, ISmsTemplatePreview>;
}

export interface ISmsSettings {
  quietHoursEnabled: boolean;
  quietHoursStart: number;
  quietHoursEnd: number;
}

export interface ISmsLog {
  id: string;
  createdAt: string;
  type: SmsNotificationType;
  phoneNumber: string;
  message: string;
  status: SmsLogStatus;
}
