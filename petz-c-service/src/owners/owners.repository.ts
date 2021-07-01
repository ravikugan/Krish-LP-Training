import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { OwnerCreateDto } from "./dto/ownerCreate.dto";
import { OwnerUpdateDto } from "./dto/ownerUpdate.dto";
import { Owner, OwnerDocument } from "./schema/owners.schema";

@Injectable()
export class OwnersRepository{

    //What is this doing
    constructor(@InjectModel(Owner.name) private ownerModel:Model<OwnerDocument>){}

    async create(ownerCreateDto:OwnerCreateDto):Promise<Owner>{

        let newOwner = new this.ownerModel(ownerCreateDto)//new keyword is a must or it will throw error
        return await newOwner.save()
    }

    async getAll():Promise<Owner[]>{
        return await this.ownerModel.find()
    }

    async update(id:string,ownerUpdateDto:OwnerUpdateDto):Promise<Owner>{
         await this.ownerModel.findByIdAndUpdate(id,ownerUpdateDto)
         return this.getById(id)
    }

    async getById(id:string):Promise<Owner>{
        return await this.ownerModel.findById(id).catch(error=>{throw  new NotFoundException(`${id} is not a valid Id`)})
    }

    async delete(id:string){
        return await this.ownerModel.findByIdAndDelete(id)
    }

}