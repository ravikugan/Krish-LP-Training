import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type OwnerDocument = Owner & Document

@Schema()
export class Owner {
    @Prop()
    id:string
    @Prop()
    firstName:string
    @Prop()
    lastName:string
    @Prop()
    contactNo:number
}

export const OwnerSchema = SchemaFactory.createForClass(Owner)
