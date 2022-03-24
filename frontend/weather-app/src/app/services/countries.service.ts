import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private API_URL = `http://localhost:4000/location`;
  constructor(private http:HttpClient) { }
  getCountry(latitude : Number, longitude: Number) : Observable<any> {
    return this.http.get<String[]>(this.API_URL + `?latitude=${latitude}&longitude=${longitude}`, { withCredentials : true, responseType: 'json'});
  }
}