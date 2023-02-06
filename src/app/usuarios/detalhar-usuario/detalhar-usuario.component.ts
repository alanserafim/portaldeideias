import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtualizarUsuarioService } from '../service/atualizar-usuario.service';
import { UsuarioDetails } from '../types/UsuarioDetails';

@Component({
  selector: 'app-detalhar-usuario',
  templateUrl: './detalhar-usuario.component.html',
  styleUrls: ['./detalhar-usuario.component.scss'],
})
export class DetalharUsuarioComponent implements OnInit {

  //@ts-ignore
  usuarioId : number;

  //@ts-ignore
  usuario$ : Observable<UsuarioDetails>;

  constructor(
    private atualizarService : AtualizarUsuarioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.usuarioId = this.route.snapshot.params['id'];
    this.detalharDadosUsuario();
    console.log(this.usuarioId);
    console.log(this.usuario$);
  }

  detalharDadosUsuario(){
    return this.atualizarService.detalharUsuario(this.usuarioId).subscribe(
      resultado => {
        this.usuario$ = resultado;
      }
    );
  }






}
