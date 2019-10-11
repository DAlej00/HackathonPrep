import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurtainsRoutingModule } from './curtains-routing.module';
import { CurtainsComponent } from './curtains.component';


@NgModule({
  declarations: [CurtainsComponent],
  imports: [
    CommonModule,
    CurtainsRoutingModule
  ]
})
export class CurtainsModule { }
