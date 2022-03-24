import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import { ChartData } from 'src/app/ChartData';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  @Input() title!: String;
  @Input() data!: ChartData[];
  xScale!: any;
  yScale!: any;
  container!: any;
  bars!: any;
  constructor() {}

  ngOnInit(): void {
    const values = this.data.map((d) => d.value);
    this.xScale = d3.scaleBand().domain(this.data.map((d) => d.data)).rangeRound([0, 750]).padding(0.2);
    this.yScale = d3.scaleLinear().domain([Math.min(...(values)), Math.max(...(values))]).range([500, 0]);
    this.container = d3.select('#bar-chart');
    this.drawData();
  }
  drawData() {
    console.log(this.data);

    this.bars = this.container
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .classed('bar' , true)
      .attr('width', this.xScale.bandwidth())
      .attr('height', (data: ChartData) => 500 - this.yScale(data.value))
      .attr('x',  (data: ChartData) =>  this.xScale(data.data))
      .attr('y', (data: ChartData) => this.yScale(data.value));
  }
}
