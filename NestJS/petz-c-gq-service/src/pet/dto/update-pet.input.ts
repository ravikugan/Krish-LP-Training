import { CreatePetInput } from './create-pet.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { PetType } from '../enums/pet.enums';

@InputType()
export class UpdatePetInput  {
  @Field()
  id:string
  @Field()
  nickName:string
  @Field(()=>String)
  type:PetType
  @Field()
  breed:string
  @Field(()=>Int)
  age:number
  @Field()
  ownerId:string
}
