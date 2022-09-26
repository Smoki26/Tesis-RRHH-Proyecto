import { Component, OnInit } from '@angular/core';
import {Color, ScaleType } from '@swimlane/ngx-charts';
import { GraficoService } from './servicio/grafico.service';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

   
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  
  colorScheme: Color = { 
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    group: ScaleType.Ordinal, 
    selectable: true, // => boolean (true / false)
    name: 'Customer Usage', 
};

  constructor(private graficoService: GraficoService) {}
  
  get single(){
    return this.graficoService.personaData;
  }

  randomize(){
    this.graficoService.random();
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {
  }

}
