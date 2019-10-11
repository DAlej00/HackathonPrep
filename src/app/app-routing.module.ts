import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'ilumination',
    loadChildren: () =>
      import('./modules/ilumination/ilumination.module').then(
        m => m.IluminationModule
      )
  },
  {
    path: 'curtains',
    loadChildren: () =>
      import('./modules/curtains/curtains.module').then(m => m.CurtainsModule)
  },
  {
    path: 'temperature',
    loadChildren: () =>
      import('./modules/temperature/temperature.module').then(
        m => m.TemperatureModule
      )
  },
  {
    path: 'energy',
    loadChildren: () =>
      import('./modules/energy/energy.module').then(m => m.EnergyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
