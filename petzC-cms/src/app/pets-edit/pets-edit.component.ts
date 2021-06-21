import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pets } from '../pets.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'cm-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.scss']
})
export class PetsEditComponent implements OnInit {

  index!:number

  editedPet!:Pets

  constructor(private service:PetsService, private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.index=params.id
      //console.log(this.searcNo)
      this.editedPet=this.service.getPet(this.index)
      //console.log(this.editedOwner)
    })
  }

  goBack(){
    this.route.navigate(['petsList'])
  }

  saveChanges(){
    this.service.editPet(this.editedPet)
    this.goBack()
  }

}
