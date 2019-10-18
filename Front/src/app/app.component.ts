import { Component } from '@angular/core';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SidenavComponent } from './modules/shared/sidenav/sidenav.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}
  isCollapsed = true;
  logged = this.auth.authenticated();
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
    }
  ];

  logout() {
    localStorage.clear();
    this.logged = false;
    this.router.navigate(['/login']);
  }
}
