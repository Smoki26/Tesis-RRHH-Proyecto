import { Component, OnInit } from '@angular/core';
import {Color, ScaleType } from '@swimlane/ngx-charts';
import { productSales,productSalesMulti  } from '../servicio/grafico.service'; 
import { random } from '../servicio/grafico.service'; 

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

   
  productSales =[]
  productSalesMulti =[]

  view: [number,number] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme: Color = { 
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
    group: ScaleType.Ordinal, 
    selectable: true, // => boolean (true / false)
    name: 'Customer Usage', 
};

/*randomize(){
    random();
    console.log(random()); 
  }
  */
  
  constructor() { Object.assign(this, { productSales, productSalesMulti }) }
  
  ngOnInit(): void {
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  
}
