import { Injectable } from '@nestjs/common';
import { PetCreateDto } from './dto/petCreate.dto';
import { PetUpdateDto } from './dto/petUpdate.dto';
import { PetsRepository } from './pets.repository';
import { Pet } from './schema/pets.schema';

@Injectable()
export class PetsService {

    constructor(private petRepository:PetsRepository){}

    async createPet(petCreateDto:PetCreateDto):Promise<Pet>{
        return await this.petRepository.create(petCreateDto)
    }

    async getAllPets():Promise<Pet[]>{
        return await this.petRepository.getAll()
    }

    async getPet(id:string):Promise<Pet>{
        return await this.petRepository.getById(id)
    }

    async updatePet(id:string,petUpdateDto:PetUpdateDto):Promise<Pet>{
        return await this.petRepository.update(id,petUpdateDto)
    }

    async deletePet(id:string){
        return await this.petRepository.delete(id)
    }

}
