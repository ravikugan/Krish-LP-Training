import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column()
  @Field()
  ownerId:string

  @ManyToOne(()=>Owner,owner=>owner.pets)
  @Field(()=>Owner)
  owner:Owner


}
