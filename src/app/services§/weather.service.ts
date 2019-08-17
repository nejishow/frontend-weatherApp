import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getProducts(address) {
    return this.http.get('https://node-backend-weatherapp.herokuapp.com/weather?address=' + address);
  }
}
