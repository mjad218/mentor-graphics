import { Component, Input, OnInit } from '@angular/core';
import { HourlyStatus } from 'src/app/HourlyStatus';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from 'src/app/services/countries.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Weather App';
  country: String = 'Egypt';
  cities!: String[];
  city!: String; 
  weatherData!: any;
  currentData!: HourlyStatus;
  constructor(private citiesService: CitiesService, private countryService: CountriesService, private weatherService: WeatherService) {}

  parseCurrentData() {
    const data = this.weatherData.current_condition[0];
    const currentData = {
      time: 'now',
      temperature: data.temp_C,
      icon: data.weatherIconUrl[0].value,
      description: data.weatherDesc[0].value,
      windSpeed: data.windspeedkmph,
      windDirection: data.winddireDegree,
      humidity: data.humidity,
      pressure: data.pressure,
      feelsLike: data.FeelsLikeC
    }
    console.log(currentData);
    this.currentData = currentData;
  }
  getPosition = (latitude: number, longitude: number) => {
    console.log({ latitude, longitude });

    this.countryService.getCountry(latitude, longitude).subscribe(({country ,city}) => {
      this.country = country;
      this.city = city;
    });

    this.citiesService.getCities(this.country).subscribe(({data}) => {
      this.cities = data;
    });

    this.weatherService.getWeatherData(this.country, this.city).subscribe(({data}) => {
      this.weatherData = data;
      this.parseCurrentData();
    });

  };

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

}
