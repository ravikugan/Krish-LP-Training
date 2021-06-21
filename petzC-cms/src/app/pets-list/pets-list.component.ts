import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import petsList from  '../data/pets.json'
import { Pets } from '../pets.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'cm-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  pets!:Pets[]

  flag:boolean=false;
  constructor(private service:PetsService,private router:Router) { }

  ngOnInit(): void {
    this.pets=this.service.getAllPets()
  }

  loadCreatePet(){
    this.router.navigate(['petsCreate'])
  }

  editPet(i:number){
    this.router.navigate(['editPets/'+i])
  }

  deletePet(i:number){
   this.service.deletePet(i)
  }

}
