import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDto } from './create-owner.dto';
import { IsNotEmpty } from "class-validator"

export class UpdateOwnerDto {
        //@IsNotEmpty()
        firstName:string
        //@IsNotEmpty()
        lastName:string
        //@IsNotEmpty()
        contactNo:number
}
