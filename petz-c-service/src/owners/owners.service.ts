import { Injectable } from '@nestjs/common';
import { OwnerCreateDto } from './dto/ownerCreate.dto';
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

}
