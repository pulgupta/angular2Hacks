import { Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template:`
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

//<--Good point : Always export the component class because you will always import it elsewhere
export class HeroDetailComponent {
  @Input() hero: Hero;
}
