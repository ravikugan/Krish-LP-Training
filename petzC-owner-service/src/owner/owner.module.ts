import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { OwnerRepository } from './owner.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from './entities/owner.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Owner.name, schema:OwnerSchema}])],
  controllers: [OwnerController],
  providers: [OwnerService,OwnerRepository]
})
export class OwnerModule {}
