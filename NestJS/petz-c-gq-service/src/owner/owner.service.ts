import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

  constructor(@InjectRepository(Owner) private ownerRepository:Repository<Owner>){}

  create(createOwnerInput: CreateOwnerInput):Promise<Owner>{
    return this.ownerRepository.save(createOwnerInput)
  }

  async findAll():Promise<Owner[]>{
    return this.ownerRepository.find(
      {relations:["pets"]}
    )
  }

  findOne(id: string):Promise<Owner>{
    return this.ownerRepository.findOne(id,
      {relations:["pets"]});
  }

  update(id: string, updateOwnerInput: UpdateOwnerInput) {
    let owner:Owner = this.ownerRepository.create(updateOwnerInput)
    owner.id = id
    return this. ownerRepository.save(owner)
    //return this.ownerRepository.save(updateOwnerInput)
  }

  async remove(id: string) {
    let owner = this.findOne(id)
    if(owner){
      let ret= await this.ownerRepository.delete(id)
      if(ret.affected === 1)
      {
        return owner
      }
    }
    return new NotFoundException(`Record cannot find by id ${id}`)
  }
}
