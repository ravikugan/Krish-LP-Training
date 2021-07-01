import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type OwnerDocument= Owner & Document

//The database will make it plural and create owners db
@Schema()
export class Owner{
    @Prop()
    id:string
    @Prop()
    firstName:string
    @Prop()
    lastName:string
    @Prop()
    contactNo:number
}

export const OwnersSchema = SchemaFactory.createForClass(Owner)
