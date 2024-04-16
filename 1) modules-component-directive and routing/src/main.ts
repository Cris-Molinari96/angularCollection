// l'applicazione si avvia grazie a questo file, il quale importa il modulo radice che dev'essere caricato
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
