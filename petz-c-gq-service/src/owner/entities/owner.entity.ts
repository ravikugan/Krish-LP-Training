import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Owner {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  firstName:string
  @Field()
  @Column()
  lastName:string
  @Field(()=>Int)
  @Column()
  contactNo:number
}
