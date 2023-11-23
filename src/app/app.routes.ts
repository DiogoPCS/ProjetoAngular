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
    path: 'receitabrownie',
    loadComponent: () => import('./receitabrownie/receitabrownie.page').then( m => m.ReceitabrowniePage)
  },
  {
    path: 'receitasorvete',
    loadComponent: () => import('./receitasorvete/receitasorvete.page').then( m => m.ReceitasorvetePage)
  },
  {
    path: 'receitatorta',
    loadComponent: () => import('./receitatorta/receitatorta.page').then( m => m.ReceitatortaPage)
  },
  {
    path: 'receitabolomilho',
    loadComponent: () => import('./receitabolomilho/receitabolomilho.page').then( m => m.ReceitabolomilhoPage)
  },
  {
    path: 'receitabolosemacucar',
    loadComponent: () => import('./receitabolosemacucar/receitabolosemacucar.page').then( m => m.ReceitabolosemacucarPage)
  },
  {
    path: 'macarrao',
    loadComponent: () => import('./macarrao/macarrao.page').then( m => m.MacarraoPage)
  },
  {
    path: 'receitapaoqueijo',
    loadComponent: () => import('./receitapaoqueijo/receitapaoqueijo.page').then( m => m.ReceitapaoqueijoPage)
  },
  {
    path: 'receitatortafrango',
    loadComponent: () => import('./receitatortafrango/receitatortafrango.page').then( m => m.ReceitatortafrangoPage)
  },
  {
    path: 'receitabolochoco',
    loadComponent: () => import('./receitabolochoco/receitabolochoco.page').then( m => m.ReceitabolochocoPage)
  },
];
