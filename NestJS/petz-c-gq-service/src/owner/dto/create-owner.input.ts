import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field()
  firstName:string
  @Field()
  lastName:string
  @Field(()=>Int)
  contactNo:number
}
