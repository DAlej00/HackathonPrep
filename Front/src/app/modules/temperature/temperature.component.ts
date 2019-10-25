import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { AutomatizationService } from '../../services/automatization.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  providers: [AutomatizationService]
})
export class TemperatureComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [24, 23, 24],
      label: 'Temperatura'
    }
  ];

  public date = new Date();
  public three;
  public two;
  public current;

  constructor(private _automatizationService: AutomatizationService) {
    this.three = this.date.getTime() - 1000 * 60 * 60 * 3;
    this.two = this.date.getTime() - 1000 * 60 * 60 * 2;
    this.current = this.date.getTime() - 1000 * 60 * 60 * 1;
    this.barChartLabels = ['11', '12', '13'];
  }

  ngOnInit() {}
}
