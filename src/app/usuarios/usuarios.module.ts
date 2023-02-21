import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';
import { DetalharUsuarioComponent } from './detalhar-usuario/detalhar-usuario.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [
    CadastroDeUsuarioComponent,
    ListaDeUsuariosComponent,
    AtualizarUsuarioComponent,
    DetalharUsuarioComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    CadastroDeUsuarioComponent,
    AtualizarUsuarioComponent,
    DetalharUsuarioComponent,
  ],
})
export class UsuariosModule {}
