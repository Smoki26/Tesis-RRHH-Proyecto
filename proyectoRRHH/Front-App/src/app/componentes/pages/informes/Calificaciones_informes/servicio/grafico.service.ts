/*import { Injectable } from '@angular/core';

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
*/
export let productSales = [
  {
    "name": "Administracion",
    "value": 15
  }, {
    "name": "Mantenimiento",
    "value": 80
  }, {
    "name": "Limpieza",
    "value": 48
  }, {
    "name": "Seguridad",
    "value": 60
  }, {
    "name": "Gerencia",
    "value": 30
  }
];
 
 


export var productSalesMulti = [
  {
    "name": "Administracion",
    "series": [
      {
        "name": "Enero",
        "value": 3
      }, {
        "name": "Febrero",
        "value": 9
      }, {
        "name": "Marzo",
        "value": 15
      }
    ]
  }, {
    "name": "Mantenimiento",
    "series": [
      {
        "name": "Enero",
        "value": 90
      }, {
        "name": "Febrero",
        "value": 70
      }, {
        "name": "Marzo",
        "value": 80
      }
    ]
  }, {
    "name": "Limpieza",
    "series": [
      {
        "name": "Enero",
        "value": 30
      }, {
        "name": "Febrero",
        "value": 50
      }, {
        "name": "Marzo",
        "value": 48
      }
    ]
  }, {
    "name": "Seguridad",
    "series": [
      {
        "name": "Enero",
        "value": 20
      }, {
        "name": "Febrero",
        "value": 42
      }, {
        "name": "Marzo",
        "value": 60
      }
    ]
  }, {
    "name": "Gerencia",
    "series": [
      {
        "name": "Enero",
        "value": 10
      }, {
        "name": "Febrero",
        "value": 19
      }, {
        "name": "Marzo",
        "value": 30
      }
    ]
  }
]
export var bubbleData = [
  {
    name: 'book',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 80.3,
        r: 80.4
      },
      {
        name: 'February',
        x: 'February',
        y: 80.3,
        r: 78
      },
      {
        name: 'March',
        x: 'March',
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'graphic card',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 78.8,
        r: 144
      },
      {
        name: 'February',
        x: 'February',
        y: 76.9,
        r: 178
      },
      {
        name: 'March',
        x: 'March',
        y: 75.4,
        r: 155
      }
    ]
  },
  {
    name: 'desk',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 81.4,
        r: 63
      },
      {
        name: 'February',
        x: 'February',
        y: 79.1,
        r: 59.4
      },
      {
        name: 'March',
        x: 'March',
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'laptop',
    series: [
      {
        name: 'January',
        x: 'January',
        y: 80.2,
        r: 62.7
      },
      {
        name: 'February',
        x: 'February',
        y: 77.8,
        r: 58.9
      },
      {
        name: 'March',
        x: 'March',
        y: 75.7,
        r: 57.1
      }
    ]
  }
];




export function random():void{
  productSales = [
    {
      "name": "Administracion",
      "value": Math.random()*100
    }, {
      "name": "Mantenimiento",
      "value": Math.random()*100
    }, {
      "name": "Limpieza",
      "value": Math.random()*100
    }, {
      "name": "Seguridad",
      "value": Math.random()*100
    }, {
      "name": "Gerencia",
      "value": Math.random()*100
    }
  ];

  productSalesMulti = [
    {
      "name": "Administracion",
      "series": [
        {
          "name": "Enero",
          "value": Math.random()*10
        }, {
          "name": "Febrero",
          "value": Math.random()*10
        }, {
          "name": "Marzo",
          "value": Math.random()*10
        }
      ]
    }, {
      "name": "Mantenimiento",
      "series": [
        {
          "name": "Enero",
          "value": Math.random()*10
        }, {
          "name": "Febrero",
          "value": Math.random()*10
        }, {
          "name": "Marzo",
          "value": Math.random()*10
        }
      ]
    }, {
      "name": "Limpieza",
      "series": [
        {
          "name": "Enero",
          "value": Math.random()*10
        }, {
          "name": "Febrero",
          "value": Math.random()*10
        }, {
          "name": "Marzo",
          "value": Math.random()*10
        }
      ]
    }, {
      "name": "Seguridad",
      "series": [
        {
          "name": "Enero",
          "value": Math.random()*10
        }, {
          "name": "Febrero",
          "value": Math.random()*10
        }, {
          "name": "Marzo",
          "value": Math.random()*10
        }
      ]
    }, {
      "name": "Gerencia",
      "series": [
        {
          "name": "Enero",
          "value": Math.random()*10
        }, {
          "name": "Febrero",
          "value": Math.random()*10
        }, {
          "name": "Marzo",
          "value": Math.random()*10
        }
      ]
    }
  ]
  
 }
