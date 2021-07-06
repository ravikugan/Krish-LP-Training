import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetEditDto } from '../petEdit.dto';
import { Pets } from '../pets.model';
import { PetsService } from '../pets.service';

@Component({
  selector: 'cm-pets-edit',
  templateUrl: './pets-edit.component.html',
  styleUrls: ['./pets-edit.component.scss']
})
export class PetsEditComponent implements OnInit {

  index!:number
  id!:string

  editedPet!:PetEditDto

  constructor(private service:PetsService, private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params.id
      //console.log(this.searcNo)
      this.service.getPet2(this.id).subscribe(data=>{
        this.editedPet=data
      })
      //console.log(this.editedOwner)
    })
  }

  goBack(){
    this.route.navigate(['petsList'])
  }

  saveChanges(){
    this.service.editPet2(this.id,this.editedPet).subscribe()
    this.goBack()
  }

}
