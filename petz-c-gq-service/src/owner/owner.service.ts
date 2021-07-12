import { Injectable } from '@nestjs/common';
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
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
