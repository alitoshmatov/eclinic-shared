import { applyDecorators } from "@nestjs/common";
import { IsString, Matches } from "class-validator";

// +998993918565
const IsPhoneNumber = () => applyDecorators(IsString(), Matches(/\+998\d{9}$/));

export default IsPhoneNumber;
