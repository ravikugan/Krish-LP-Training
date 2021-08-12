import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loadOwners(){
    this.router.navigate(['/ownersList'])
  }

  loadPets(){
    this.router.navigate(['/petsList'])
  }

}
