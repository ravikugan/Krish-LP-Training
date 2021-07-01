import { Injectable } from '@nestjs/common';
import { OwnerCreateDto } from './dto/ownerCreate.dto';
import { OwnerUpdateDto } from './dto/ownerUpdate.dto';
import { OwnersRepository } from './owners.repository';
import { Owner } from './schema/owners.schema';

@Injectable()
export class OwnersService {

    constructor(private ownersRepository:OwnersRepository){}

    private owners=[]

    async createAllOwners(ownerCreateDto:OwnerCreateDto):Promise<Owner>{
        return await this.ownersRepository.create(ownerCreateDto)
    }
    
    async getAllOwners():Promise<Owner[]>{
        return await this.ownersRepository.getAll()    
    }

    async updateOwner(id:string,ownerUpdateDto:OwnerUpdateDto):Promise<Owner>{
        return await this.ownersRepository.update(id,ownerUpdateDto)
    }

    async getOwnerById(id:string):Promise<Owner>{
        return await this.ownersRepository.getById(id)
    }

    async deleteOwner(id:string){
        return await this.ownersRepository.delete(id)
    }

}
