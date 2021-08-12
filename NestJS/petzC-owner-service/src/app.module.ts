import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_CONNECTION } from './app.properties';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [OwnerModule,MongooseModule.forRoot(MONGODB_CONNECTION)],
  controllers: [],
  providers: [],
})
export class AppModule {}
