import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tutor',
    loadComponent: () => import('./tutor/tutor.page').then( m => m.TutorPage)
  },
  {
    path: 'servico',
    loadComponent: () => import('./servico/servico.page').then( m => m.ServicoPage)
  },
  {
    path: 'pet',
    loadComponent: () => import('./pet/pet.page').then( m => m.PetPage)
  },
  {
    path: 'agenda',
    loadComponent: () => import('./agenda/agenda.page').then( m => m.AgendaPage)
  },
  {
    path: 'procedimentos',
    loadComponent: () => import('./procedimentos/procedimentos.page').then( m => m.ProcedimentosPage)
  },
  {
    path: 'pacote',
    loadComponent: () => import('./pacote/pacote.page').then( m => m.PacotePage)
  },
  {
    path: 'pagamento-efetuado',
    loadComponent: () => import('./pagamento-efetuado/pagamento-efetuado.page').then( m => m.PagamentoEfetuadoPage)
  },
  {
    path: 'pagamento-pendente',
    loadComponent: () => import('./pagamento-pendente/pagamento-pendente.page').then( m => m.PagamentoPendentePage)
  },
  {
    path: 'teste',
    loadComponent: () => import('./teste/teste.page').then( m => m.TestePage)
  }
];
