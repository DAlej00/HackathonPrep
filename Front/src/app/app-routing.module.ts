import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'ilumination',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./modules/ilumination/ilumination.module').then(
        m => m.IluminationModule
      )
  },
  {
    path: 'curtains',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./modules/curtains/curtains.module').then(m => m.CurtainsModule)
  },
  {
    path: 'temperature',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./modules/temperature/temperature.module').then(
        m => m.TemperatureModule
      )
  },
  {
    path: 'energy',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./modules/energy/energy.module').then(m => m.EnergyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
