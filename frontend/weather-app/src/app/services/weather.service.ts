import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_URL = `https://us-central1-my-weather-app-gad.cloudfunctions.net/weather`;
  constructor(private http:HttpClient) { }

  getWeatherData(country : String, city : String) : Observable<any> {
    return this.http.get<String[]>(this.API_URL + `?city=${city}&country=${country}`, { withCredentials : true, responseType: 'json'});
  }
}