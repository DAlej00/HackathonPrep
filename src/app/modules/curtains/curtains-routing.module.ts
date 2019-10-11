import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurtainsComponent } from './curtains.component';

const routes: Routes = [
  {
    path: '',
    component: CurtainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurtainsRoutingModule {}
