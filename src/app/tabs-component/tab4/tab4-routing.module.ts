import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from 'src/app/usuarios/atualizar-usuario/atualizar-usuario.component';
import { CadastroDeUsuarioComponent } from 'src/app/usuarios/cadastro-de-usuario/cadastro-de-usuario.component';
import { ListaDeUsuariosComponent } from 'src/app/usuarios/lista-de-usuarios/lista-de-usuarios.component';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
  },
  {
    path: 'cadastrar',
    component: CadastroDeUsuarioComponent,
  },
  {
    path: 'listar',
    component: ListaDeUsuariosComponent,
  },
  {
    path: 'atualizar',
    component: AtualizarUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
