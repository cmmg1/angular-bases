import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string ='ironman';
  public  age:number =45;

  get capitalizedName():string {
      return this.name.toUpperCase()
  }

  getHeroDescription():string {

    return `${this.name} - ${this.age}`;
  }


  changeHero():void {
    this.name='Spiderman';
  }
  changeAge ():void {
   this.age=23;
  }

  resetForm ():void
  {
    this.age=45;
    this.name='ironman';

   // document.querySelectorAll('h1')!.forEach( element =>
   //  {
   //   element.innerHTML ='<h1>Desde Angular</h1>'  ;
   //  });
   }
  }

