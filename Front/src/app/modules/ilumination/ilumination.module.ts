import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IluminationRoutingModule } from './ilumination-routing.module';
import { IluminationComponent } from './ilumination.component';


@NgModule({
  declarations: [IluminationComponent],
  imports: [
    CommonModule,
    IluminationRoutingModule
  ]
})
export class IluminationModule { }
