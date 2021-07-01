import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersController } from './owners.controller';
import { OwnersRepository } from './owners.repository';
import { OwnersService } from './owners.service';
import { Owner, OwnersSchema } from './schema/owners.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Owner.name, schema:OwnersSchema}])],
  controllers: [OwnersController],
  providers: [OwnersService,OwnersRepository]
})
export class OwnersModule {}
