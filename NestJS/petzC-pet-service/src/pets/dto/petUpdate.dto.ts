import { IsNotEmpty } from "class-validator"
import { PetsType } from "../enums/pets.enum"

export class PetUpdateDto{
    @IsNotEmpty()
    nickName:string
    @IsNotEmpty()
    type:PetsType
    @IsNotEmpty()
    breed:string
    @IsNotEmpty()
    age:number
}