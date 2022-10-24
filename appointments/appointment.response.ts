export interface AppointmentDetails {
  id: string;
  note: string;
  startTime: string;
  finishTime: string;
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
  };
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
  } | null;
}

export interface IAppointmentList {
  id: string;
  note: string;
  startTime: string;
  finishTime: string;
  doctor: {
    id: string;
    firstName: string;
    lastName: string;
  };
  customer: {
    id: string;
    firstName: string;
    lastName: string;
  } | null;
}
