import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerService {

  constructor(private ownerRepository:OwnerRepository){}

  create(owner: CreateOwnerDto) {
    return this.ownerRepository.create(owner)
  }

  findAll():Promise<Owner[]>{
    return this.ownerRepository.getAll()
  }

  findOne(id: string):Promise<Owner>{
    return this.ownerRepository.findOne(id)
  }

  update(id: string, owner: UpdateOwnerDto) {
    return this.ownerRepository.update(id,owner)
  }

  remove(id: string) {
    return this.ownerRepository.delete(id)
  }
}
