import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class OwnerValidationContactPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value.contactNo.toString().length)
    if(value.contactNo.toString().length!=10)
      throw new BadRequestException("Not a valid contact Number")
    return value
  }
}
