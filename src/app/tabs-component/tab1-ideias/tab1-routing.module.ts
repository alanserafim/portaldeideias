import { IdeiaAtualizarComponent } from './../../ideias/ideia-atualizar/ideia-atualizar.component';
import { IdeiaDetalharComponent } from './../../ideias/ideia-detalhar/ideia-detalhar.component';
import { IdeiaListarComponent } from './../../ideias/ideia-listar/ideia-listar.component';
import { IdeiaCadastrarComponent } from './../../ideias/ideia-cadastrar/ideia-cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'cadastrar',
    component: IdeiaCadastrarComponent,
  },
  {
    path: 'listar',
    component: IdeiaListarComponent,
  },
  {
    path: 'detalhar/:id',
    component: IdeiaDetalharComponent,
  },
  {
    path: 'atualizar/:id',
    component: IdeiaAtualizarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
