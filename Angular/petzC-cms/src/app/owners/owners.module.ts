import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerEditComponent } from './owner-edit/owner-edit.component';



@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerCreateComponent,
    OwnerEditComponent
  ],exports:[
    OwnerListComponent
  ],imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"ownersList",component:OwnerListComponent},
      // {path:"ownersEdit",component:OwnerEditComponent},
      {path:"ownersEdit/:id",component:OwnerEditComponent},
      {path:"ownersCreate",component:OwnerCreateComponent}

    ])
  ]
})
export class OwnersModule { }
