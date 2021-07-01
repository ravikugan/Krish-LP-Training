import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OwnerCreateDto } from './dto/ownerCreate.dto';
import { OwnerUpdateDto } from './dto/ownerUpdate.dto';
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

    @Put(':id/number')
    async updateOwner(@Param('id') id:string, @Body() OwnerUpdateDto:OwnerUpdateDto):Promise<Owner>{
        return await this.ownersService.updateOwner(id,OwnerUpdateDto)
    }

    @Get(':id')
    async getOwner(@Param('id') id:string):Promise<Owner>{
        return this.ownersService.getOwnerById(id)
    }

    //Must configure 204
    @Delete(':id')
    async deleteOwner(@Param('id') id:string){
        return this.ownersService.deleteOwner(id)
    }
}
