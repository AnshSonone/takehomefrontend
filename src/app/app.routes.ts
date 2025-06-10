import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then(m => m.HomeComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup').then(m => m.SignupComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.LoginComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then(m => m.ProfileComponent)
  }
];
