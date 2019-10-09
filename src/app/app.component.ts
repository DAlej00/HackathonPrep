import { Component } from '@angular/core';
import { HeaderComponent } from './modules/shared/header/header.component';
import { SidenavComponent } from './modules/shared/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}
