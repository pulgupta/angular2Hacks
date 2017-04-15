import { NgModule }       from '@angular/core'; //<--javascript modules
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import {DashboardComponent}    from './dashboard.component'

//^^^^ All these imports are javascript based and nothing is releated to angular as such.
//Most of the apps has one module(root module) but as we grow we can create more feature modules 
//and can lazy load them.

@NgModule({
  imports: [
    BrowserModule, //<-- We have included this both at the library level (which is javascript module import
      // and also at @NgModule level which is angular module. So this is an example of two modules working
     // together)
    //Browser module is required by every application which should run in a browser 
    FormsModule, //<--Only ngModules classes go inside a import array
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
  declarations: [ // <-- This should contains the components of our application.Only 
  //components, directives and pipes should be listed in the declarations section 
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
  //should set this bootstrap property. This should list the parent of all the components to be bootstrapped and 
  // this intern will boot strap all the childs of the parent
})

export class AppModule {
}
