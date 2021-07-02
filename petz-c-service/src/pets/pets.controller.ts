import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetCreateDto } from './dto/petCreate.dto';
import { PetUpdateDto } from './dto/petUpdate.dto';
import { PetValidationTypePipe } from './pet-validation-type.pipe';
import { PetsService } from './pets.service';
import { Pet } from './schema/pets.schema';

@Controller('pets')
export class PetsController {
    constructor(private petsService:PetsService){}

    @Post()
    @UsePipes(new PetValidationTypePipe)
    @UsePipes(ValidationPipe)
    async createPet(@Body() petCreateDto:PetCreateDto):Promise<Pet>{
        return await this.petsService.createPet(petCreateDto)
    }

    @Get()
    async getAllPets():Promise<Pet[]>{
        return await this.petsService.getAllPets()
    }

    @Get(':id')
    async getPet(@Param('id') id:string):Promise<Pet>{
        return await this.petsService.getPet(id).catch(e=>{throw new NotFoundException(`${id} does not exist`)})
    }

    @Put(':id/update')
    @UsePipes(ValidationPipe)
    async updatePet(@Param('id') id:string, @Body() petUpdateDto:PetUpdateDto){
        return await this.petsService.updatePet(id,petUpdateDto).catch(e=>{throw new NotFoundException(`${id} does not exist`)})
    }

    @Delete(':id')
    async deletePet(@Param('id') id:string){
        return await this.petsService.deletePet(id).catch(e=>{throw new NotFoundException(`${id} is not in the database`)})
    }



}
