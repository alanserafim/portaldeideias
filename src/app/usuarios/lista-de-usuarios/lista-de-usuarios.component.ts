import { Router } from '@angular/router';
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
    private router : Router
  ) {

    this.usuarios$ = this.listarUsuariosService.listarUsuarios();
  }

  ngOnInit(
  ) {
  }

  atualizarPage(id: number){
    const page: string = `/tabs/tab4/atualizar/${id}`
    this.router.navigate([page])
  }

  detalharPage(id: number){
    const page: string = `/tabs/tab4/detalhar/${id}`
    this.router.navigate([page])
  }

  apagarPage(id: number){
    const page: string = `/tabs/tab4/apagar/${id}`
    this.router.navigate([page])
  }


}
