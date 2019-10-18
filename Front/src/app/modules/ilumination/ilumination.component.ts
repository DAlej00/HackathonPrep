import { Component, OnInit } from '@angular/core';
import { AutomatizationService } from '../../services/automatization.service';

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

  onChange(place: string) {
    console.log(place);
    // this._automatizationService.sendAction('ligths', place).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
