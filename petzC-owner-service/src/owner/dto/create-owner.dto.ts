import { IsNotEmpty } from "class-validator"

export class CreateOwnerDto {
    //@IsNotEmpty()
    firstName:string
    //@IsNotEmpty()
    lastName:string
    //@IsNotEmpty()
    contactNo:number
}
