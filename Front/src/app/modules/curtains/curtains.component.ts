import { Component, OnInit } from '@angular/core';
import { AutomatizationService } from '../../services/automatization.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css'],
  providers: [AutomatizationService]
})
export class CurtainsComponent implements OnInit {
  constructor(private _automatizationService: AutomatizationService) {}
  ngOnInit() {}

  move(direction: string) {
    console.log(direction);
    this._automatizationService
      .sendAction(environment.remote, direction)
      .subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );
  }
}
