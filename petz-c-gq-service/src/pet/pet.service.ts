import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetService {

  constructor(@InjectRepository(Pet) private petRepository:Repository<Pet>){}

  async create(createPetInput: CreatePetInput):Promise<Pet>{
    return this.petRepository.save(createPetInput)
  }

  async findAll():Promise<Pet[]>{
    return this.petRepository.find()
  }

  findOne(id: string) {
    return this.petRepository.findOne(id)
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  }
}
