import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Controla a rota dos links, direcionando para seus devidos módulos
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'evento', loadChildren: () => import('./components/evento/evento.module').then(m => m.EventoModule)
  },
  {
    path: 'contato', loadChildren: () => import('./components/cadastro/cadastro.module').then(m => m.CadastroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
