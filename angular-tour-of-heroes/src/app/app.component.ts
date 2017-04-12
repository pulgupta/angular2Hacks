import { Component } from   '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import {HEROES} from './mock-heroes'
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',  //<----Name of the html element this component will render

  //<----View to show this data------>
  template:  `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
})

//<----Exporting the class so that it is available outside the file---->
export class AppComponent  {
    title = 'Tour of Heroes';
    heroes: Hero[];
    //<--This is a dummy variable. This is not used and is kept here just for demo
    selectedHero1: Hero = {                   //<----Initialising the hero class
                    id: 1,
                    name: 'Windstorm_class'
                };
    selectedHero: Hero; //<--This here means that we are creating a variable of type Hero

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
    constructor(private heroService: HeroService) { }

    //<-- And this is how you get the data using a promise
    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    //<-- This is a hook we have created so that the method will be called at the load of the application
    //<-- we can do this in constructor as well but that will make our constructor more loaded and we do not want to do that
    ngOnInit(): void {
      this.getHeroes();
    }

}
