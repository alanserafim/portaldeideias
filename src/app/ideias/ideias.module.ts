import { IdeiaListarComponent } from './ideia-listar/ideia-listar.component';
import { IdeiaAtualizarComponent } from './ideia-atualizar/ideia-atualizar.component';
import { IdeiaDetalharComponent } from './ideia-detalhar/ideia-detalhar.component';
import { IdeiaCadastrarComponent } from './ideia-cadastrar/ideia-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MessageService } from './service/message.service';

@NgModule({
  declarations: [
    IdeiaCadastrarComponent,
    IdeiaDetalharComponent,
    IdeiaAtualizarComponent,
    IdeiaListarComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    IdeiaCadastrarComponent,
    IdeiaDetalharComponent,
    IdeiaAtualizarComponent,
    IdeiaListarComponent
  ],
  providers: [MessageService], 
})
export class IdeiasModule { }
