import { CreateOwnerInput } from './create-owner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOwnerInput  {
  @Field()
  id:string
  @Field()
  firstName:string
  @Field()
  lastName:string
  @Field(()=>Int)
  contactNo:number
}
