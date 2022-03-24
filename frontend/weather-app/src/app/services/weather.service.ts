import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_URL = `http://localhost:4000/weather-data?city=El+Beheira+Governorate&country=egypt`;
  constructor(private http:HttpClient) { }

  getWeatherData(country : String, city : String) : Observable<any> {
    return this.http.get<String[]>(this.API_URL + `?city=${city}&country=${country}`, { withCredentials : true, responseType: 'json'});
  }
}