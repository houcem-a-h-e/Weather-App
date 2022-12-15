import { Weather, WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private weatherService: WeatherService){}


  cityName?:string = 'Tunis';
  weatherData?:WeatherData;
  ngOnInit(): void {
    this.getWeatherDat(this.cityName);
    this.cityName='';
  }
  onSubmit(){

    this.getWeatherDat(this.cityName);
    this.cityName='';
  }

  private getWeatherDat(cityName:string){
    this.weatherService.getWeatherData(cityName)
   .subscribe({
    next:(response)=>{
      this.weatherData=response;
        console.log(response);
    }
   });
  }
}
