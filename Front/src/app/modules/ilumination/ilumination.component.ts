import { Component, OnInit } from '@angular/core';
import { AutomatizationService } from '../../services/automatization.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-ilumination',
  templateUrl: './ilumination.component.html',
  styleUrls: ['./ilumination.component.css']
})
export class IluminationComponent implements OnInit {
  livingRoom: boolean = false;
  room: boolean = false;
  dinningRoom: boolean = false;

  constructor(private _automatizationService: AutomatizationService) {}

  ngOnInit() {}

  onChange(place: string, value: boolean) {
    var action;
    if (place == 'livingRoom') {
      action = !value ? '1' : '2';
    }

    if (place == 'dinningRoom') {
      action = !value ? '3' : '4';
    }

    if (place == 'room') {
      action = !value ? '5' : '6';
    }

    this._automatizationService
      .sendAction(environment.remote, action)
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
