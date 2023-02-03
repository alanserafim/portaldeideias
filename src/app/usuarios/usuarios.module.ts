
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';



@NgModule({
  declarations: [
    CadastroDeUsuarioComponent,
    ListaDeUsuariosComponent,
    AtualizarUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    CadastroDeUsuarioComponent,
    AtualizarUsuarioComponent
  ]
})
export class UsuariosModule { }
