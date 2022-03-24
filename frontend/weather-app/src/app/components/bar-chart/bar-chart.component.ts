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
  @Input() width!: any;
  @Input() height!: any;
  @Input() chart!: number;
  @Input() data!: ChartData[];
  selector!: string;

  xScale!: any;
  yScale!: any;
  container!: any;
  bars!: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.width = parseInt(this.width);
    this.height = parseInt(this.height);
    const values = this.data.map((d) => d.value);
    this.xScale = d3
      .scaleBand()
      .domain(this.data.map((d) => d.data))
      .rangeRound([0, this.width])
      .padding(0.2);
    this.yScale = d3
      .scaleLinear()
      .domain([Math.min(...values) - 3, Math.max(...values)])
      .range([this.height, 0]);

    this.selector = `.chart${this.chart} svg`;
    this.chart && this.drawData();
  }
  drawData() {
    console.log({ width: this.width });
    this.container = d3.select(this.selector);
    this.bars = this.container
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', 'translate(25, -30)')
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', this.xScale.bandwidth())
      .attr('height', (data: ChartData) => 500 - this.yScale(data.value))
      .attr('x', (data: ChartData) => this.xScale(data.data))
      .attr('y', (data: ChartData) => this.yScale(data.value));

    this.drawAxis();
  }

  drawAxis() {
    const xAxis = d3.axisBottom(this.xScale);
    this.container
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(25, ${this.height - 30})`);

    const yAxis = d3.axisLeft(this.yScale);
    this.container
      .append('g')
      .call(yAxis)
      .attr('transform', 'translate(30 , -30)');
  }
}
