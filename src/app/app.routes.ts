import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'one', loadComponent: () => import('./one/one').then((m) => m.One) },
  { path: 'two', loadComponent: () => import('./two/two').then((m) => m.Two) },
  { path: 'three', loadComponent: () => import('./three/three').then((m) => m.Three) },
  { path: 'four', loadComponent: () => import('./four/four').then((m) => m.Four) },
];
