import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { PetsType } from "../enums/pets.enum";

export type PetDocument = Pet & Document

@Schema()
export class Pet{
    @Prop()
    pid:string
    @Prop()
    nickName:string
    @Prop()
    type:PetsType
    @Prop()
    breed:string
    @Prop()
    age:number
}

export const PetSchema = SchemaFactory.createForClass(Pet)