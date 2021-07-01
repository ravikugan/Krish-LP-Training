import { IsNotEmpty } from "class-validator"

export class OwnerCreateDto{
    @IsNotEmpty()
    firstName:string
    @IsNotEmpty()
    lastName:string
    @IsNotEmpty()
    contactNo:number
}