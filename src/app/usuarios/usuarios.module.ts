
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';



@NgModule({
  declarations: [
    CadastroDeUsuarioComponent,
    ListaDeUsuariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    CadastroDeUsuarioComponent
  ]
})
export class UsuariosModule { }
