import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calificacion-informe',
  templateUrl: './calificacion-informe.component.html',
  styleUrls: ['./calificacion-informe.component.css']
})

export class CalificacionInformeComponent implements OnInit {

  
  constructor(private renderer: Renderer2) { }
  title = 'angular-ngx-charts';
  ngOnInit(){
  this.addJsToElement('../../../assets/js/tabla_user.js').onload = (teste) => {
    // console.log(teste);
}
}

addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}
