import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';

//Components




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
