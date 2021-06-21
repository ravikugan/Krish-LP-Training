import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import owners from './data/owners.json'
import { Owners } from './owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  //private baseUrl:string="http://localhost:3001/owners"
  private messageSoruce=new BehaviorSubject('');
  //oid=this.messageSoruce.asObservable();

  allOwners:Owners[]=owners;
  

  getAllOwners(){
    return this.allOwners;
  }

  getOwner(oid:number){
    return this.allOwners[oid];
  }

  addOwner(owner:Owners){
    this.allOwners.push(owner);
  }

  editOwner(owner:Owners){
    this.allOwners[Number(owner.oid)-1]=owner
  }

  deleteOwner(index:number){
    this.allOwners.splice(index,1)
    //Isn't deleting when there is only one element left
  }

  getLastIndex(){
    return Number(this.allOwners[this.allOwners.length-1].oid)+1;
  }



  constructor() { }
}
