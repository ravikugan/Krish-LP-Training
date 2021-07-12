import { InputType, Int, Field } from '@nestjs/graphql';
import { PetType } from '../enums/pet.enums';

@InputType()
export class CreatePetInput {
  @Field()
  nickName:string
  @Field(()=>String)
  type:PetType
  @Field()
  breed:string
  @Field(()=>Int)
  age:number
}
