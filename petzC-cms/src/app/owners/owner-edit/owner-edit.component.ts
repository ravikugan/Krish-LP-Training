import { Component, OnInit } from '@angular/core';
import {Owners} from '../owners.model'
import {  ActivatedRoute, Router } from '@angular/router';
import { OwnerServiceService } from '../owner-service.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { OwnersEditDto } from '../ownerEdit.dto';


@Component({
  selector: 'cm-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {

  owners!:Owners; //I am sauying I will assign value to owners but not now

  searcNo:number=0
 
  id:string=''

  editedOwner:Owners={
    oid:'',
    firstName:'',
    lastName:'',
    contactNo:0
  }

  newEditedOwner:OwnersEditDto={
    contactNo:0
  }

  // ownerEditForm = new FormGroup({
  //   //ownerID:new FormControl(),
  //   //firstName:new FormControl(),
  //   lastName:new FormControl(),
  //   contactNo:new FormControl()
  // })

  constructor(private router:Router,private service:OwnerServiceService,private activatedRoute:ActivatedRoute) { }



  ngOnInit(): void {
    //this.subscription=this.service.oid.subscribe(id=>this.oid=id)
    this.activatedRoute.params.subscribe(params=>{
      this.id=params.id
      //console.log(this.searcNo)
      //this.editedOwner=this.service.getOwner(this.searcNo)
      //console.log(this.editedOwner)
    })

    this.service.getOwner2(this.id).subscribe(data=>{
      this.editedOwner=data
    })
  }
  

  editChanges(){
    //console.log(this.ownerEditForm.value)
    //this.router.navigate(['ownersList'],{ state: {data: this.editedOwner} });
    this.service.editOwner(this.editedOwner);
    alert("You changes are saved")
    this.goBack()
  }

  editChanges2(){
    this.service.editOwner2(this.id,this.newEditedOwner).subscribe()
    alert("You changes are saved")
    this.goBack()
  }

  goBack(){
    this.router.navigate(['ownersList'])
  }


}
