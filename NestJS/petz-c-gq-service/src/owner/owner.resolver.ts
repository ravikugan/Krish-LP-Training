import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner,{name:'createOwner'})
  createOwner(@Args('owner') owner: CreateOwnerInput) {
    return this.ownerService.create(owner);
  }

  @Query(() => [Owner], { name: 'getAllOwner' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'findOwner' })
  findOne(@Args('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Mutation(() => Owner)
  updateOwner(@Args('owner') updateOwnerInput: UpdateOwnerInput) {
    return this.ownerService.update(updateOwnerInput.id, updateOwnerInput);
  }

  @Mutation(() => Owner)
  removeOwner(@Args('id') id: string) {
    return this.ownerService.remove(id);
  }
}
