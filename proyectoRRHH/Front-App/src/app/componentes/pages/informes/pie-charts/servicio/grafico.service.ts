import { Injectable } from '@angular/core';

interface Personas {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class GraficoService {


  private data: Personas[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
      {
      "name": "UK",
      "value": 6200000
    }
  ];
 get personaData(){
  return this.data;
 }

 random(){
  this.data = [{
    "name": "Germany",
    "value": Math.random()*1000000
  },
  {
    "name": "USA",
    "value": Math.random()*1000000
  },
  {
    "name": "France",
    "value": Math.random()*1000000
  },
    {
    "name": "UK",
    "value":Math.random()*1000000
  }];
 }

}
