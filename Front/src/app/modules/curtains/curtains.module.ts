import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurtainsRoutingModule } from './curtains-routing.module';
import { CurtainsComponent } from './curtains.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CurtainsComponent],
  imports: [CommonModule, CurtainsRoutingModule, SharedModule]
})
export class CurtainsModule {}
