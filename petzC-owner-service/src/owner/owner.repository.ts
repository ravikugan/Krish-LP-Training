import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOwnerDto } from "./dto/create-owner.dto";
import { UpdateOwnerDto } from "./dto/update-owner.dto";
import { Owner, OwnerDocument } from "./entities/owner.entity";

@Injectable()
export class OwnerRepository{

    constructor(@InjectModel(Owner.name) private ownerModel:Model<OwnerDocument>){}

    async create(owner:CreateOwnerDto):Promise<Owner>{
        let newOwner = new this.ownerModel(owner)
        return await newOwner.save()
        
    }

    async getAll(){
        return this.ownerModel.find()
    }

    async findOne(id:string):Promise<Owner>{
        return this.ownerModel.findById(id)
    }

    async update(id:string,owner:UpdateOwnerDto){
        await this.ownerModel.findByIdAndUpdate(id,owner)
        return this.findOne(id)
    }

    async delete(id:string):Promise<Owner>{
        return this.ownerModel.findByIdAndDelete(id)
    }

}