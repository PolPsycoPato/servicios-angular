import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home').then((h) => h.Home) },

  {path: 'personas', loadComponent: () => import('./components/personas-api/personas-api').then((p) => p.PersonasApi) },
];
