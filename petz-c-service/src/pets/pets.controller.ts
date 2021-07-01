import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PetCreateDto } from './dto/petCreate.dto';
import { PetUpdateDto } from './dto/petUpdate.dto';
import { PetsService } from './pets.service';
import { Pet } from './schema/pets.schema';

@Controller('pets')
export class PetsController {
    constructor(private petsService:PetsService){}

    @Post()
    async createPet(@Body() petCreateDto:PetCreateDto):Promise<Pet>{
        return await this.petsService.createPet(petCreateDto)
    }

    @Get()
    async getAllPets():Promise<Pet[]>{
        return await this.petsService.getAllPets()
    }

    @Get(':id')
    async getPet(@Param('id') id:string):Promise<Pet>{
        return await this.petsService.getPet(id)
    }

    @Put(':id/update')
    async updatePet(@Param('id') id:string, @Body() petUpdateDto:PetUpdateDto){
        return await this.petsService.updatePet(id,petUpdateDto)
    }

    @Delete(':id')
    async deletePet(@Param('id') id:string){
        return await this.petsService.deletePet(id)
    }



}
