import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
  @Input() city!: String;
  @Input() index!: Number;
  @Input() country!: String;
  constructor() { }

  ngOnInit(): void {
  }

}
