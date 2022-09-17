import { IsUUID } from "class-validator";

export class ActiveDepartments {
  @IsUUID(undefined, {
    each: true,
  })
  ids: string[];
}
