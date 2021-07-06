import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetEditDto } from '../petEdit.dto';
import { Pets } from '../pets.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'cm-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.scss']
})
export class PetsCreateComponent implements OnInit {
  pet:PetEditDto={
  nickName:'',
  type:'',
  breed:'',
  age:0
}
  constructor(private service:PetsService,private router:Router) { }

  ngOnInit(): void {
  }

  createPet(){
    this.service.addPet2(this.pet).subscribe()
    this.router.navigate(['petsList']);
  }


}
