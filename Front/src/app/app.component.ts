import { Component } from '@angular/core';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SidenavComponent } from './modules/shared/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = true;

  routes = [
    {
      icon: 'home',
      theme: 'outline',
      text: 'Inicio',
      link: 'home'
    },
    {
      icon: 'bulb',
      theme: 'outline',
      text: 'Iluminación',
      link: 'ilumination'
    },
    {
      icon: 'border-inner',
      theme: 'outline',
      text: 'Cortinas',
      link: 'curtains'
    },
    {
      icon: 'fire',
      theme: 'outline',
      text: 'Temperatura',
      link: 'temperature'
    },
    {
      icon: 'calculator',
      theme: 'outline',
      text: 'Consumo de energía',
      link: 'energy'
    },
    {
      icon: 'user',
      theme: 'outline',
      text: 'Iniciar sesión',
      link: 'login'
    }
  ];
}
