import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private Router:Router){}

  title = 'petzC-cms';

  loadOwnerList(){
    this.Router.navigate(['ownersList']);
  }

  loadHome(){
    this.Router.navigate(['home']);
  }

  loadPetsList(){
    this.Router.navigate(['petList']);
  }
}
