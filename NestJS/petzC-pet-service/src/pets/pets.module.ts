import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pet, PetSchema } from './schema/pets.schema';
import { PetsRepository } from './pets.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Pet.name, schema:PetSchema}])],
  controllers: [PetsController],
  providers: [PetsService,PetsRepository]
})
export class PetsModule {}
