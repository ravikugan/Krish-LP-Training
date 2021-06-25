import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { OwnersModule } from './owners/owners.module';
import { PetsModule } from './pets/pets.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetsCreateComponent } from './pets/pets-create/pets-create.component';
import { PetsEditComponent } from './pets/pets-edit/pets-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsListComponent,
    PetsCreateComponent,
    PetsEditComponent
  ],
  imports: [
    BrowserModule,
    OwnersModule,
    PetsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'ownersList',component:OwnerListComponent},
      {path:'home',component:HomeComponent},
      {path:'petsList',component:PetsListComponent},
      {path:'petsCreate',component:PetsCreateComponent},
      {path:'editPets/:id',component:PetsEditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
