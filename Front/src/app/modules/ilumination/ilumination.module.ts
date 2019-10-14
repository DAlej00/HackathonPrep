import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IluminationRoutingModule } from './ilumination-routing.module';
import { IluminationComponent } from './ilumination.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IluminationComponent],
  imports: [CommonModule, IluminationRoutingModule, SharedModule]
})
export class IluminationModule {}
