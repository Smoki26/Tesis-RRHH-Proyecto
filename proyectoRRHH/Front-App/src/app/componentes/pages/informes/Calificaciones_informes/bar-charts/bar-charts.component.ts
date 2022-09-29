import { Component, OnInit } from '@angular/core';
import {Color, ScaleType } from '@swimlane/ngx-charts';
import { productSales,productSalesMulti } from '../servicio/grafico.service';


@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {



  productSales = []
  productSalesMulti = []

  view: [number,number] = [700, 370];

  // options
  legendTitle: string = 'Empleados';
  legendTitleMulti: string = 'Mes';
  //legendPosition: string = 'below'; // ['right', 'below']
  
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Empleados';
  xAxisLabel: string = 'Puestos';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [30, 50, 70, 80, 150, 200]

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
 
  colorScheme: Color = { 
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
    group: ScaleType.Ordinal, 
    selectable: true, // => boolean (true / false)
    name: 'Customer Usage', 
};
  //schemeType: string = 'ordinal'; // 'ordinal' or 'linear'

  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;

  yScaleMax: number = 9000;

  roundEdges: boolean = false;

  constructor() { Object.assign(this, { productSales, productSalesMulti }); }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }

 
}
