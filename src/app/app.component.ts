import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { subscribe } from '@angular/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _http: Http) {}

  cityName = "";
  searchCity() {
    this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.cityName + "&APPID=de84f1f1eaffc87826f0a6d42094445f")

  .subscribe(
      (res: Response) => {
        const weatherCity = res.json();
        console.log(weatherCity);
      }
    )

  }

  title = 'Weather App';
}
