import { PetsType } from "../enums/pets.enum"

export class PetCreateDto{
    nickName:string
    type:PetsType
    breed:string
    age:number
}