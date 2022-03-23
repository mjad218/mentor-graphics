import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app';
  KEY = `AIzaSyBi808bo93OVTLmyGzBka0GaQFjJiTHCMc`;

  getPosition(latitude: number, longitude: number) {
    this.MAPS_API = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.KEY}`;
    console.log(this.MAPS_API);
  }
  ngOnInit () : void {
    navigator.geolocation.getCurrentPosition( (position) => {this.getPosition(position.coords.latitude , position.coords.longitude)}, (err) => {console.log(err)});
  }
}
