import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PetCreateDto } from "./dto/petCreate.dto";
import { PetUpdateDto } from "./dto/petUpdate.dto";
import { Pet, PetDocument } from "./schema/pets.schema";

@Injectable()
export class PetsRepository{
    constructor(@InjectModel(Pet.name) private petModel:Model<PetDocument>){}

    async create(petCreateDto:PetCreateDto):Promise<Pet>{
        let  newPet = new this.petModel(petCreateDto)
        return await newPet.save()
    }

    async getAll():Promise<Pet[]>{
        return await this.petModel.find()
    }

    async getById(id:string):Promise<Pet>{
        return await this.petModel.findById(id)
    }

    async update(id:string,petUpdateDto:PetUpdateDto):Promise<Pet>{
        await this.petModel.findByIdAndUpdate(id,petUpdateDto)
        return await this.getById(id)
    }

    async delete(id:string){
        return await this.petModel.findByIdAndDelete(id)
    }
}