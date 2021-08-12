import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { OwnerService } from 'src/owner/owner.service';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet) private petRepository:Repository<Pet>,private ownerService:OwnerService){}

  async create(createPetInput: CreatePetInput):Promise<Pet>{
    return this.petRepository.save(createPetInput)
  }

  async findAll():Promise<Pet[]>{
    return this.petRepository.find()
  }

  async findOne(id: string) {
    return this.petRepository.findOne(id)
  }

  update(id: string, updatePetInput: UpdatePetInput) {
    let pet:Pet =  this.petRepository.create(updatePetInput)
    pet.id = id
    return this.petRepository.save(pet)
  }

  async remove(id: string) {
    let pet = this.petRepository.findOne(id)
    if(pet){
      let ret = await this.petRepository.delete(id)
      if(ret.affected === 1)
      {
        return pet
      }
    }
    return new NotFoundException(`Record cannot find by id ${id}`)
  }

  async findOwner(id:string){
    return this.ownerService.findOne(id)
  }
}
