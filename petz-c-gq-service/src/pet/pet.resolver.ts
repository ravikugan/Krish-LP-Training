import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entities/pet.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Owner } from 'src/owner/entities/owner.entity';

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet,{name:"cretePet"})
  createPet(@Args('pet') createPetInput: CreatePetInput) {
    return this.petService.create(createPetInput);
  }

  @Query(() => [Pet], { name: 'getAllPet' })
  findAll() {
    return this.petService.findAll();
  }

  @Query(() => Pet, { name: 'findPet' })
  findOne(@Args('id') id: string) {
    return this.petService.findOne(id);
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(updatePetInput.id, updatePetInput);
  }

  @Mutation(() => Pet)
  removePet(@Args('id', { type: () => Int }) id: number) {
    return this.petService.remove(id);
  }

  @ResolveField(()=>Owner)
  owner(@Parent() pet:Pet){
    return this.petService.findOwner(pet.ownerId)
  }
}
