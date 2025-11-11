import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home').then((h) => h.Home) },

  {
    path: 'personas',
    loadComponent: () =>
      import('./components/personas-api/personas-api').then((p) => p.PersonasApi),
  },
  { path: 'coches', loadComponent: () => import('./components/coche/coche').then((c) => c.Coche) },
  { path: 'plantilla', loadComponent: () => import('./components/plantilla/plantilla').then((l) => l.Plantilla) }


];
