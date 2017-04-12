import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//The @Injectable() decorator tells TypeScript to emit metadata about the service.
//The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> { //<--This is for asynchronous call. This method will return a promise and when the call back is complete
    //we can get the data using the promise. See app.component.ts for getting the data using promise
    return Promise.resolve(HEROES);
  }

  //The method below also returns a promise but it mocks a slow connection by waiting for 2 seconds before returning
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
