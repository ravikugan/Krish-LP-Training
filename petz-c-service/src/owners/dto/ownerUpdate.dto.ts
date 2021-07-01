import { IsNotEmpty } from "class-validator";

export class OwnerUpdateDto{
    @IsNotEmpty()
    contactNo:number
}