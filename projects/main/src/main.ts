import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '**', redirectTo: 'demo' },
  {
    path: 'demo',
    loadComponent: () =>
      import('../../forms/src/lib/master-demo/master-demo.component')
        .then((m) => m.MasterDemoComponent),
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ],
}).catch((e) => console.error(e));
