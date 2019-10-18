import { Component, OnInit } from '@angular/core';
import { AutomatizationService } from '../../services/automatization.service';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css'],
  providers: [AutomatizationService]
})
export class CurtainsComponent implements OnInit {
  constructor(private _automatizationService: AutomatizationService) {}
  moving: boolean = false;
  ngOnInit() {}

  move(direction: string) {
    console.log(direction);
    if (direction == 'stop') this.moving = false;
    else this.moving = true;
    // this._automatizationService.sendAction('curtains', direction).subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }
}
