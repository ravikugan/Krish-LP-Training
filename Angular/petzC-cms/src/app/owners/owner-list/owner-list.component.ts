import { Component, OnInit } from '@angular/core';
//import owners from '../data/owners.json'
import {Owners} from '../owners.model'
import { Router } from '@angular/router';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'cm-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  owners!:any[]//creating Owner type array and setting the dat from the json file.
  id:number=1


  constructor(private rotuer:Router,private service:OwnerServiceService) { }

  ngOnInit(): void {
    this.service.getAllOwners2().subscribe({
      next:data=>{
        this.owners=data
      }
    })
    //console.log(this.owners)
  }

  loadOwnersEdit(id:number){
    this.rotuer.navigate(["/ownersEdit/"+id]);
  }

  loadOwnersEdit2(id:string){
    this.rotuer.navigate(["/ownersEdit/"+id])
  }

  loadOwnersCreate(){
    this.rotuer.navigate(["ownersCreate"]);
  }

  deleteOwner(id:number){
    this.service.deleteOwner(Number(id))
  }

  deleteOwner2(id:string){
    this.service.deleteOwner2(id).subscribe(data=>{
      this.ngOnInit()
    })
    
  }

}


