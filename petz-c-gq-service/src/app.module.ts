import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OwnerModule } from './owner/owner.module';
import { PetModule } from './pet/pet.module';


@Module({
  imports: [OwnerModule,GraphQLModule.forRoot(
    {autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql')}
  ),
    TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'admin',
    database:'petzC',
    entities:["dist/**/*.entity{.ts,.js}"],
    synchronize:true //Don't use this in production
  }),
    PetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
