import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  date = new Date();
  mode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    // console.log(change.date, change.mode);
  }
}
