//Custom class
export class Hero {
  id: number;
  name: string;
}


/*
The below example is being saved here because it very simply 
tells us that we are first defining 2 variables and then we are 
initializing them in the constructor so that the template
can use them

export class AppCtorComponent {
  title: string;
  myHero: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}

This is a short cut in case we want to define a class with properties and contstructor
export class Hero {
  constructor(
    public id: number,
    public name: string) { }
}

This short cut does all these things 
Declares a constructor parameter and its type.
Declares a public property of the same name.
Initializes that property with the corresponding argument when creating an instance of the class.

*/