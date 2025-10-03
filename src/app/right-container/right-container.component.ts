import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-right-container',
  imports: [NgIf, FaIconComponent, NgFor],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  constructor(public weatherService: WeatherService) {};

  onTodayClick() {
    this.weatherService.today = true;
    this.weatherService.week = false;
  }

  onWeekClick() {
    this.weatherService.week = true;
    this.weatherService.today = false;
  }
  onCelsiusClick() {
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }

  onFahrenheitClick() {
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }
}
