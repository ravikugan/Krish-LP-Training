import { Injectable } from '@angular/core';
import petsList from './data/pets.json'
import { Pets } from './pets.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  allPets:Pets[]=petsList

  getAllPets(){
    return this.allPets;
  }

  getPet(pid:number){
    return this.allPets[pid];
  }

  addPet(pet:Pets){
    this.allPets.push(pet);
  }

  editPet(pet:Pets){
    this.allPets[Number(pet.pid)-1]=pet
  }

  deletePet(index:number){
    this.allPets.splice(index,1)
    //Isn't deleting when there is only one element left
  }

  getLastIndex(){
    return Number(this.allPets[this.allPets.length-1].pid)+1;
  }


  constructor() { }
}
