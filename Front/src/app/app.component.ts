import { Component, DoCheck, OnInit } from '@angular/core';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SidenavComponent } from './modules/shared/sidenav/sidenav.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { AutomatizationService } from './services/automatization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, AutomatizationService]
})
export class AppComponent implements DoCheck, OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private _automatizationService: AutomatizationService
  ) {}

  public interval;
  ngOnInit() {
    this.interval = setInterval(this.getTemperature, 7000);
  }

  getTemperature() {
    // this._automatizationService.sendAction('9').subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    console.log('temperatura');
    setTimeout(this.getTemperature, 7000);
  }

  ngDoCheck(): void {
    this.logged = this.auth.authenticated();
  }

  isCollapsed = true;
  logged = this.auth.authenticated();
  routes = [
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

  public ip: string = null;

  setIp() {
    if (this.ip == null) return;
    let done = 'http://' + this.ip + ':80';
    environment.remote = done;
  }

  logout() {
    localStorage.clear();
    this.logged = false;
    this.router.navigate(['/login']);
  }
}
