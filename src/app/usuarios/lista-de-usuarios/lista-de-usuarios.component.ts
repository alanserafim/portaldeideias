import { UsuarioList } from './../types/UsuarioList';

import { map, Observable } from 'rxjs';
import { ListarUsuariosService } from './../service/listar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Page } from '../types/Page';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss'],
})
export class ListaDeUsuariosComponent implements OnInit {

  //@ts-ignore
  usuarios$ : Observable<UsuarioList[]>;

  //private users: UsuarioList[]; // Nossa lista de usuários


  constructor(
    private listarUsuariosService : ListarUsuariosService,
  ) {

    this.usuarios$ = this.listarUsuariosService.listarUsuarios();
  }

  ngOnInit(
  ) {

  }


}
