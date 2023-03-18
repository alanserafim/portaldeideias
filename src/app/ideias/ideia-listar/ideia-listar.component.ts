import { map } from 'rxjs';
import { IdeiasService } from './../service/ideias.service';
import { IdeiaDetalhes } from './../types/ideiaDetalhes';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/login/service/Usuario.service';
import { MessageService } from '../service/message.service';

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
    private router : Router,
    private ideiaService : IdeiasService,
    private usuarioService: UsuarioService,
    //private messageService: MessageService
  ) { 
  }

  ngOnInit() {
    //this.messageService._connect();
    this.getListaDeIdeias();
  }

  detalharIdeiaPage(id: any){
    const page: string = `/tabs/tab1/detalhar/${id}`
    this.router.navigate([page])
  }

  getListaDeIdeias(){
    this.getUsuarioLogado();
    this.ideiaService.listarIdeiasPorUsuario(this.usuarioId).subscribe(
      (lista) => this.listaDeIdeias = lista
    )
  }

  getUsuarioLogado(){
    this.usuarioService.retornaUsuario().subscribe(
        (usuario)=> this.usuarioId = usuario.id
    )
  }
}
