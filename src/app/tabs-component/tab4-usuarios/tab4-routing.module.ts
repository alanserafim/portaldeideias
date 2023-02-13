import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from 'src/app/usuarios/atualizar-usuario/atualizar-usuario.component';
import { CadastroDeUsuarioComponent } from 'src/app/usuarios/cadastro-de-usuario/cadastro-de-usuario.component';
import { DetalharUsuarioComponent } from 'src/app/usuarios/detalhar-usuario/detalhar-usuario.component';
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
    path: 'atualizar/:id',
    component: AtualizarUsuarioComponent,
  },
  {
    path: 'detalhar/:id',
    component: DetalharUsuarioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab4PageRoutingModule {}
