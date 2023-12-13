import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(`
Moin ein paar kurze Infos für den der es kontrolliert:
-In der Portfolio section ist drei mal Join zu finden. Die werden natürlich ersetzt
mit den zukünftigen Angular Projekten und dienen nur als Platzhalter.

-Wenn man in Chrome die Entwicklertools öffnet und in den 'Mobile-mode' geht kann man komischerweise nach rechts scrollen und 
mit der Responsive Viewer erweiterung funktioniert alles wie es soll und ist dort nicht möglich
`)