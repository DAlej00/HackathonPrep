import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnergyRoutingModule } from './energy-routing.module';
import { EnergyComponent } from './energy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EnergyComponent],
  imports: [CommonModule, EnergyRoutingModule, SharedModule]
})
export class EnergyModule {}
