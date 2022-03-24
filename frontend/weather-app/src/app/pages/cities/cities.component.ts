import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities!: String[];
  routeState: any;
  country!: String;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      this.routeState = this.router.getCurrentNavigation();
      console.log(this.routeState);
      if (this.routeState) {
        this.cities = this.routeState.extras.state.cities ? JSON.parse(this.routeState.extras.state.cities) : '';
        this.country = this.routeState.extras.state.country ? this.routeState.extras.state.country : '';
      }
    }
  }
  ngOnInit(): void {}
}
