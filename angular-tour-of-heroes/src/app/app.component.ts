import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet> <!--Earlier we were directly injecting the
    my-heroes tag here. So the app was showing the list of heroes on page load.
    However which this router-outlet we tell the app to show the data when the
    link matches the routes defined in the module.ts file-->
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
