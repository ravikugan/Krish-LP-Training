import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import petsList from './data/pets.json'
import { Pets } from './pets.model';
import { Observable } from 'rxjs';
import { PetCreateDto } from './petCreate.dto';
import { PetEditDto } from './petEdit.dto';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  allPets:Pets[]=petsList

  petUrl:string = "http://localhost:4000/pets"

  constructor(private http:HttpClient){}
  
  getAllPets2():Observable<Pets[]>{
    return this.http.get<Pets[]>(this.petUrl)
  }

  addPet2(pet:PetCreateDto){
    return this.http.post<PetCreateDto>(this.petUrl,pet)
  }

  editPet2(id:string,editPet:PetEditDto){
    return this.http.put<PetEditDto>(`${this.petUrl}/${id}/update`,editPet)
  }

  getPet2(id:string):Observable<Pets>{
    return this.http.get<Pets>(`${this.petUrl}/${id}`)
  }

  deletePet2(id:string){
    return this.http.delete(`${this.petUrl}/${id}`)
  }

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


  
}
