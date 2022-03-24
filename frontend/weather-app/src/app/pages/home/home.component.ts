import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HourlyStatus } from 'src/app/HourlyStatus';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
import { WeatherService } from 'src/app/services/weather.service';
import parseCurrentData from 'src/app/parseCurrentData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Weather App';
  country: String = 'Egypt';
  cities!: String[];
  maxCities: number = 5;
  toBeShownCities!: String[];
  city!: String; 
  weatherData!: any;
  currentData!: HourlyStatus;
  constructor(private citiesService: CitiesService, private countryService: CountriesService, private weatherService: WeatherService, private router : Router) {}

  getPosition = (latitude: number, longitude: number) => {
    this.countryService.getCountry(latitude, longitude).subscribe(({country ,city}) => {
      this.country = country;
      this.city = city;
    });
    this.getCities();
    this.getWeatherData();
  };
  getWeatherData() {
    this.weatherService.getWeatherData(this.country, this.city).subscribe(({data}) => {
      this.weatherData = data;
      this.currentData = parseCurrentData(this.weatherData.current_condition[0]);
    });
  }
  getCities() {
    this.citiesService.getCities(this.country).subscribe(({data}) => {
      this.cities = data;
      this.toBeShownCities = this.cities.slice(0, this.maxCities);
    });  
  }
  ngOnInit(): void {
    const geoOptions = {
      enableHighAccuracy: true,
    };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.getPosition(position.coords.latitude, position.coords.longitude);
      },
      (err) => {
        console.log(err);
      },
      geoOptions
    );
  }
  locationAccessBlocked(country : String) {
    this.country = country;
    this.getCities();
    this.getWeatherData();
  }
}