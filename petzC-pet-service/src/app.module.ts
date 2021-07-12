import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_CONNECTION } from './app.properties';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [MongooseModule.forRoot(MONGODB_CONNECTION), PetsModule],

})
export class AppModule {}
