import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { OwnerCreateDto } from './dto/ownerCreate.dto';
import { OwnerUpdateDto } from './dto/ownerUpdate.dto';
import { OwnerValidationContactPipe } from './owner-validation-contact.pipe';
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
    @UsePipes(new OwnerValidationContactPipe)//Custom Validation Pipe
    @UsePipes(ValidationPipe)//Default Validation Pipe
    async creteOwners(@Body() ownerCreateDto:OwnerCreateDto):Promise<Owner>{
        console.log(ownerCreateDto)
        return await this.ownersService.createAllOwners(ownerCreateDto)
    }

    @Put(':id/number')
    @UsePipes(new OwnerValidationContactPipe)
    @UsePipes(ValidationPipe)
    async updateOwner(@Param('id') id:string, @Body() OwnerUpdateDto:OwnerUpdateDto):Promise<Owner>{
        return await this.ownersService.updateOwner(id,OwnerUpdateDto).catch(error=>{throw new NotFoundException(`${id} is not a valid ID`)})
    }

    @Get(':id')
    async getOwner(@Param('id') id:string):Promise<Owner>{
        return this.ownersService.getOwnerById(id)
    }

    //Must configure 204
    @Delete(':id')
    @HttpCode(204)
    async deleteOwner(@Param('id') id:string){
        let temp =await this.ownersService.deleteOwner(id).catch(error=>{throw new NotFoundException(`${id} is not a valid ID`)})
            
    }
}
