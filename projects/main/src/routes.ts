import { Routes } from '@angular/router';
export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('../../forms/src/lib/master-demo/master-demo.component')
        .then((m) => m.MasterDemoComponent),
  }
] as Routes;
