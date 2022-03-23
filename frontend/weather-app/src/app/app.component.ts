import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather App';
  country!: String;
  cities!: String[];
   
  getPosition(latitude: number, longitude: number) {
  }

  ngOnInit () : void {
    navigator.geolocation.getCurrentPosition( (position) => {this.getPosition(position.coords.latitude , position.coords.longitude)}, (err) => {console.log(err)});
  }
}
