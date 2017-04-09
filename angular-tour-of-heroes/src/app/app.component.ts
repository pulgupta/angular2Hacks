import { Component } from '@angular/core';

//Custom class
export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',  //<----Name of the html element this component will render
  
  //<----View to show this data------>
  template: `  
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    </div>`,
})

//<----Exporting the class so that it is available outside the file---->
export class AppComponent  { 
    title = 'Tour of Heroes';
    hero: Hero = {                   //<----Initialising the hero class
                    id: 1,
                    name: 'Windstorm_class'
                };
}