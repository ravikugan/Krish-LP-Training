import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PetType } from '../enums/pet.enums';

@ObjectType()
@Entity()
export class Pet {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:string
  @Field()
  @Column()
  nickName:string
  @Field(()=>String)
  @Column(()=>String)
  type:PetType
  @Field()
  @Column()
  breed:string
  @Field(()=>Int)
  @Column()
  age:number
}
