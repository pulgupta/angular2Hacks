import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//This is used to bootstrap the whole application. This file is very stable and once set up it may never change.
//This is used to run JIT-compiled browser based application