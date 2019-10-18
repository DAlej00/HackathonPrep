import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureComponent } from './temperature.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [TemperatureComponent],
  imports: [CommonModule, TemperatureRoutingModule, SharedModule, ChartsModule]
})
export class TemperatureModule {}
