import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro').then((m) => m.CadastroPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'receita',
    loadComponent: () => import('./receita/receita.page').then( m => m.ReceitaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'semgluten',
    loadComponent: () => import('./semgluten/semgluten.page').then( m => m.SemglutenPage)
  },
  {
    path: 'semlactose',
    loadComponent: () => import('./semlactose/semlactose.page').then( m => m.SemlactosePage)
  },
  {
    path: 'semacucar',
    loadComponent: () => import('./semacucar/semacucar.page').then( m => m.SemacucarPage)
  },
  {
    path: 'lowcarb',
    loadComponent: () => import('./lowcarb/lowcarb.page').then( m => m.LowcarbPage)
  },
  {
    path: 'innertable',
    loadComponent: () => import('./innertable/innertable.page').then( m => m.InnertablePage)
  },
];
