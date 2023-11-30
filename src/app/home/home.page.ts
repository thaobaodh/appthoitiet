import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  weatherTemp :any
  todayDate = new Date()
  cityName = ""
  weatherIcon :any
  weatherDetails:any
  name=""

  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe(results => {
      console.log(results);
      this.weatherTemp = (results as any).main;
      this.name = (results as any).name;
      console.log(this.weatherTemp);
      this.weatherDetails = (results as any).weather[0];
      console.log(this.weatherDetails);
      this.weatherIcon =`https://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png` 
      
      
    })
  }

}
