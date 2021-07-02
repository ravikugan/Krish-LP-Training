import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class OwnerValidationContactPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(value.contactNo.length!=10)
      throw new BadRequestException("Not a valid contact Number")
    return value
  }
}
