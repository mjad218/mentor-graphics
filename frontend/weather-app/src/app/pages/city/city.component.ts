import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HourlyStatus } from 'src/app/HourlyStatus';
import { WeatherService } from 'src/app/services/weather.service';
import parseCurrentData from 'src/app/parseCurrentData';
import { ChartData, parseChartData } from 'src/app/ChartData';

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
  dataByAvgTemp!: ChartData[];
  constructor(private route:ActivatedRoute, private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.city = paramMap.get('city');
      this.country = paramMap.get('country');
  });

  this.weatherService.getWeatherData(this.country, this.city).subscribe(({data}) => {
    this.weatherData = data;
    this.currentData =  parseCurrentData(this.weatherData.current_condition[0]);
    this.dataByAvgTemp = this.weatherData.weather.map( (el : any) => { return parseChartData(el, "date" , "avgtempC")});
    // console.log(this.dataByAvgTemp);
    // console.log(this.weatherData)
    // console.log({current : this.currentData})
  });

  }

}
