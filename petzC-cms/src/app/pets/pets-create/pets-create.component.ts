import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pets } from '../pets.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'cm-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.scss']
})
export class PetsCreateComponent implements OnInit {
  pet:Pets={
  pid:'',
  nickName:'',
  type:'',
  breed:'',
  age:0
}
  constructor(private service:PetsService,private router:Router) { }

  ngOnInit(): void {
    this.pet.pid=this.service.getLastIndex()+""
  }

  createPet(){

    this.service.addPet(this.pet);
    this.router.navigate(['petsList']);
  }


}
