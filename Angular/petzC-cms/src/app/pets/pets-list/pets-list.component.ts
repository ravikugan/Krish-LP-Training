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

  pets!:any[]

  flag:boolean=false;
  constructor(private service:PetsService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllPets2().subscribe(data=>{
      this.pets=data
    })
  }

  loadCreatePet(){
    this.router.navigate(['petsCreate'])
  }

  editPet(i:string){
    this.router.navigate(['editPets/'+i])
  }
  
  deletePet(i:string){
    this.service.deletePet2(i).subscribe(data=>{
      this.ngOnInit()
    })
  }

}
