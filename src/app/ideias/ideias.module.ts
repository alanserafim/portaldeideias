import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IdeiaAtualizarComponent } from './ideia-atualizar/ideia-atualizar.component';
import { IdeiaCadastrarComponent } from './ideia-cadastrar/ideia-cadastrar.component';
import { IdeiaDetalharComponent } from './ideia-detalhar/ideia-detalhar.component';
import { IdeiaListarComponent } from './ideia-listar/ideia-listar.component';

@NgModule({
  declarations: [
    IdeiaCadastrarComponent,
    IdeiaDetalharComponent,
    IdeiaAtualizarComponent,
    IdeiaListarComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  exports: [
    IdeiaCadastrarComponent,
    IdeiaDetalharComponent,
    IdeiaAtualizarComponent,
    IdeiaListarComponent,
  ],
})
export class IdeiasModule {}
