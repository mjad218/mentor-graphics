import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-country-from',
  templateUrl: './country-from.component.html',
  styleUrls: ['./country-from.component.css']
})
export class CountryFromComponent implements OnInit {
  country!: string;

  @Output() getCountry: EventEmitter<String> = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.country){
      alert("please enter the country");
      return;
    }
    this.getCountry.emit(this.country);
  }
}