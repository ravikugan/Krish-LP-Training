import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import owners from './data/owners.json'
import { OwnersCreateDto } from './ownerCreate.dto';
import { OwnersEditDto } from './ownerEdit.dto';
import { Owners } from './owners.model';

@Injectable({
  providedIn: 'root'//This service is now registered in the root.Anyone can use it
})
export class OwnerServiceService {

  //private baseUrl:string="http://localhost:3001/owners"
  //private messageSoruce=new BehaviorSubject('');
  //oid=this.messageSoruce.asObservable();

  ownerUrl:string = "http://localhost:4000/owners"


  constructor(private http:HttpClient){

  }

  getAllOwners2():Observable<Owners[]>{
    return this.http.get<Owners[]>(this.ownerUrl)
  }

  addOwner2(owner:OwnersCreateDto){
    return this.http.post<OwnersCreateDto>(this.ownerUrl,owner)
  }

  editOwner2(id:string,editOwner:OwnersEditDto){
    return this.http.put<OwnersEditDto>(`${this.ownerUrl}/${id}/update`,editOwner)
  }

  getOwner2(id:string):Observable<Owners>{
    return this.http.get<Owners>(`${this.ownerUrl}/${id}`)
  }

  deleteOwner2(id:string){
    return this.http.delete(`${this.ownerUrl}/${id}`)
  }

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



}
