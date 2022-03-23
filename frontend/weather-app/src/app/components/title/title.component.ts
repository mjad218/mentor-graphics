import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input()
  title!: String;
  @Input() highlightedText!: String;
  @Input() id!: String;

  constructor() {}

  ngOnInit(): void {}
}
