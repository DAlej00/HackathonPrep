import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IluminationComponent } from './ilumination.component';

const routes: Routes = [
  {
    path: '',
    component: IluminationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IluminationRoutingModule {}
