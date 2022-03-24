import { Component, Input, OnInit } from '@angular/core';
import { HourlyStatus } from 'src/app/HourlyStatus';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() data!: HourlyStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
