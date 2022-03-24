import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities!: String[];
  @Input() country!: any;

  constructor(
    private route: ActivatedRoute,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.country = paramMap.get('country');
    });

    this.citiesService.getCities(this.country).subscribe(({ data }) => {
      this.cities = data;
    });
  }
}
