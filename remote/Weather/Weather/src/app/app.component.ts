import { HttpClient } from '@angular/common/http';
import { LeadingComment } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { KelvinToCelsiusPipe } from './pipes/kelvin-to-celsius.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  weatherData?: WeatherData;
  cityName: string = 'Delhi';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe
    (res => {
      this.weatherData = res;
      console.log(res);
    })
  }

}
