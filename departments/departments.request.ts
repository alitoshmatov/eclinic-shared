import { IsUUID } from "@alitoshmatov/class-validator";

export class ActiveDepartments {
  @IsUUID(undefined, {
    each: true,
  })
  ids: string[];
}
