import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioLogadoService } from './../../login/service/usuario-logado.service';
import { IdeiasService } from './../service/ideias.service';
import { IdeiaDetalhes } from './../types/ideiaDetalhes';

@Component({
  selector: 'app-ideia-listar',
  templateUrl: './ideia-listar.component.html',
  styleUrls: ['./ideia-listar.component.scss'],
})
export class IdeiaListarComponent implements OnInit {
  //@ts-ignore
  listaDeIdeias: IdeiaDetalhes[];
  //@ts-ignore
  usuarioId: any;

  constructor(
    private router: Router,
    private ideiaService: IdeiasService,
    private usuarioLogadoService: UsuarioLogadoService
  ) {}

  ngOnInit() {
    this.getListaDeIdeias();
  }

  detalharIdeiaPage(id: any) {
    const page: string = `/tabs/tab1/detalhar/${id}`;
    this.router.navigate([page]);
  }

  getListaDeIdeias() {
    this.getUsuarioLogado();
    this.ideiaService
      .listarIdeiasPorUsuario(this.usuarioId)
      .subscribe((lista) => (this.listaDeIdeias = lista));
  }

  getUsuarioLogado() {
    this.usuarioLogadoService
      .retornaUsuario()
      .subscribe((usuario) => (this.usuarioId = usuario.id));
  }
}
