import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HourlyStatus } from 'src/app/HourlyStatus';
import { WeatherService } from 'src/app/services/weather.service';
import parseCurrentData from 'src/app/parseCurrentData';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  routeState!: any;
  city!: any;
  country!: any;
  weatherData!: any;
  currentData!: HourlyStatus;

  constructor(private route:ActivatedRoute, private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.city = paramMap.get('city');
      this.country = paramMap.get('country');
      console.log(this.city , this.country);
  });

  this.weatherService.getWeatherData(this.country, this.city).subscribe(({data}) => {
    this.weatherData = data;
    this.currentData =  parseCurrentData(this.weatherData.current_condition[0]);
    console.log({weather : this.weatherData})
    console.log({current : this.currentData})
  });

  }

}
