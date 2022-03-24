import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.css']
})
export class ListCitiesComponent implements OnInit {
  @Input() cities!: String[];
  @Input() country!: String;
  constructor() { }

  ngOnInit(): void {
  }

}
