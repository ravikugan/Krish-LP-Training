import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';
import { OwnersCreateDto } from '../ownerCreate.dto';
import { Owners } from '../owners.model';

@Component({
  selector: 'cm-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

  constructor(private service:OwnerServiceService) { }

  oid:string=''
  firstName:string=''
  lastName:string=''
  contactNo:number=0

  owner!:Owners
  newOwner!:OwnersCreateDto


  ngOnInit(): void {
    //this.oid=this.service.getLastIndex()+"";
    //console.log(this.oid)
  }

  createOwner(){
    this.owner={
      oid:this.oid,
      firstName:this.firstName,
      lastName:this.lastName,
      contactNo:this.contactNo
    }

    this.newOwner={
      firstName:this.firstName,
      lastName:this.lastName,
      contactNo:this.contactNo
    }

    //this.service.addOwner(this.owner);
    console.log("Is the damn button working")
    this.service.addOwner2(this.newOwner).subscribe()
  }

}
