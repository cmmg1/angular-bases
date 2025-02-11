import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
<h1>Hola Contador x</h1>
<h3> Contador: {{counter}}</h3>
 <button (click)="increaseBy(1)" >Incrementar</button>
 <button (click)="resetCounter()">Iniciar</button>
 <button (click)="increaseBy(-1)">Decrementar</button>
  `

})

export class CounterComponent  {
      public title:string = 'TIIIITULO --> sale de la clase CounterComponent de app-counter';
      public counter:number =10;

    increaseBy(value:number):void {
      this.counter +=value;
    }
    resetCounter():void {
      this.counter =10;
    }
  }

