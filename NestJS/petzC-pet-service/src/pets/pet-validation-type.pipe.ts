import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PetsType } from './enums/pets.enum';

@Injectable()
export class PetValidationTypePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value.type)
    if(!(value.type in PetsType)){
      throw new BadRequestException(`${value.type} is not a valid type for a pet.`)
    }
    if(isNaN(value.age)){
      throw new BadRequestException('Value of age should be a number')
    }
    return value;
  }
}
