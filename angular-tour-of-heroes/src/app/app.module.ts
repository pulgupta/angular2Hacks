import { NgModule }       from '@angular/core'; //<--javascript modules
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import {DashboardComponent}    from './dashboard.component'

@NgModule({
  imports: [
    BrowserModule, //<-- We have included this both at the library level (which is javascript module import
    // and also at @NgModule level which is angular module. So this is an example of two modules working
  // together)
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',  //<-- This is a redirect route.
        //This will redirect the page to the url which we specify here. Right now
        //we are redirecting empty string to dashboard so this will happen at
        //page load itself
        pathMatch: 'full'
      },
      {
        path: 'detail/:id', //<--This is parameterised routing. In such case
        //id will be the dynamic part of the request
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService // <--The level at which we define this providers will decide the
    //number of instances created. In this case we have defined the providers at the root module
    //level so the complete application will share a single instance. In case we would
    //have defined this at the component level then each component instance will get a new instance
    //of this service
  ],
  bootstrap: [ AppComponent ] // We can have many modules but only the root module
  //should set this bootstrap property
})

export class AppModule {
}
