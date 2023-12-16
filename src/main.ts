import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(`
Moin ein paar kurze Infos für den der es kontrolliert:
-In der Portfolio section sind die Projekte doppelt zu finden. Die werden natürlich ersetzt
mit den zukünftigen Angular Projekten und dienen nur als Platzhalter.

`)