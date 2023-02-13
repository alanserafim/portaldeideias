import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab5Page } from './tab5.page';


const routes: Routes = [
  {
    path: '',
    component: Tab5Page,
  }
  // {
  //   path: 'cadastrar',
  //   component: CadastroDeUsuarioComponent,
  // },
  // {
  //   path: 'listar',
  //   component: ListaDeUsuariosComponent,
  // },
  // {
  //   path: 'atualizar/:id',
  //   component: AtualizarUsuarioComponent,
  // },
  // {
  //   path: 'detalhar/:id',
  //   component: DetalharUsuarioComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab5PageRoutingModule {}
