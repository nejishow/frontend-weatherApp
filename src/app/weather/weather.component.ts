import { WeatherService } from './../services§/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  data;
  address;
  constructor(private weather: WeatherService, private formBuilder: FormBuilder) {
    //
  }
  getWeather() {
    this.weather.getProducts(this.weatherForm.get('address').value).subscribe(
      (data: any) => {
        this.data = data; console.log(data);

      }

    );

  }
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.weatherForm = this.formBuilder.group({
      address: '',

    });
  }
}
