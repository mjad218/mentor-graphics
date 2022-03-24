import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HourlyStatus } from 'src/app/HourlyStatus';
import { WeatherService } from 'src/app/services/weather.service';
import parseCurrentData from 'src/app/parseCurrentData';
import { ChartData, parseChartData } from 'src/app/ChartData';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  routeState!: any;
  city!: any;
  country!: any;
  weatherData!: any;
  currentData!: HourlyStatus;
  dataByAvgTemp!: ChartData[];
  monthByAvgTemp!: ChartData[];
  chartWidth!: number;
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const width = document.querySelector('.row')?.clientWidth;
    if (width && width > 778) {
      this.chartWidth = width - 80; // / 2 - 20 - 80;
    } else {
      this.chartWidth = width ? width : 400;
    }
    this.route.paramMap.subscribe((paramMap) => {
      this.city = paramMap.get('city');
      this.country = paramMap.get('country');
    });

    this.weatherService
      .getWeatherData(this.country, this.city)
      .subscribe(({ data }) => {
        this.weatherData = data;
        this.currentData = parseCurrentData(
          this.weatherData.current_condition[0]
        );
        this.dataByAvgTemp = this.weatherData.weather.map((el: any) => {
          return parseChartData(el, 'date', 'avgtempC');
        });
        this.monthByAvgTemp = this.weatherData.ClimateAverages[0].month.map(
          (el: any) => {
            return parseChartData(el, 'name', 'avgMinTemp');
          }
        );
        console.log(this.weatherData.ClimateAverages[0].month);
        console.log(this.weatherData);
        // console.log({current : this.currentData})
      });
  }
}
