import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private API_URL = `http://localhost:4000/cities/`;
  constructor(private http:HttpClient) { }

  getCities(country : String) : Observable<any> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<String[]>(this.API_URL + country, { withCredentials : true, responseType: 'json'});
  }
}
