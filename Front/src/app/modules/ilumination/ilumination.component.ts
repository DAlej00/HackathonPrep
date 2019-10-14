import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilumination',
  templateUrl: './ilumination.component.html',
  styleUrls: ['./ilumination.component.css']
})
export class IluminationComponent implements OnInit {
  ip: String;
  constructor() {}

  ngOnInit() {}

  connect() {
    if (this.ip.length < 14) {
      console.log('Ip no valida');
    }
  }

  change(state: number) {
    let data = state == 1 ? 'a' : 'b';
    console.log(data);
  }
}
