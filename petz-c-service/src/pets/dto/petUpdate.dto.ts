import { PetsType } from "../enums/pets.enum"

export class PetUpdateDto{
    nickName:string
    type:PetsType
    breed:string
    age:number
}