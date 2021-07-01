import { Body, Controller, Get, Post } from '@nestjs/common';
import { OwnerCreateDto } from './dto/ownerCreate.dto';
import { OwnersService } from './owners.service';
import { Owner } from './schema/owners.schema';

@Controller('owners')
export class OwnersController {

    constructor(private ownersService:OwnersService){}

    private owners=[]

    @Get()
    async getAllOwners():Promise<Owner[]>{
        return await this.ownersService.getAllOwners()
    }

    @Post()
    async creteOwners(@Body() ownerCreateDto:OwnerCreateDto):Promise<Owner>{
        return await this.ownersService.createAllOwners(ownerCreateDto)
    }
}
