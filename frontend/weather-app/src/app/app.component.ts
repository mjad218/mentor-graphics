import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather app';
  ngOnInit () : void {
    navigator.geolocation.getCurrentPosition( (position) => {console.log(position)}, (err) => {console.log(err)});
  }
}
