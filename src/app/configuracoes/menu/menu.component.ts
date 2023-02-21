import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/service/token.service';
import { UsuarioService } from 'src/app/usuarios/service/usuario.service';

import { UsuarioLogadoService } from './../../login/service/usuario-logado.service';
import { UsuarioTokenInfo } from './../../login/types/UsuarioTokenInfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  //@ts-ignore
  usuarioLogado$: Observable<UsuarioTokenInfo>;

  //@ts-ignore
  usuario$: Observable<UsuarioDetails>;

  constructor(
    private usuarioService: UsuarioService,
    private usuarioLogadoService: UsuarioLogadoService,
    private tokenService: TokenService,
    private route: Router
  ) {}

  ngOnInit() {
    this.recebeUsuarioLogado();
    console.log(this.usuarioLogado$.id);
  }

  public detalharDados() {
    return this.usuarioService
      .detalharUsuario(this.usuarioLogado$.id)
      .subscribe(
        (dados) => {
          this.usuario$ = dados;
          console.log(this.usuario$);
        },
        (error) => {
          alert('Erro ao detalhar usuario');
          console.log(error);
        }
      );
  }

  public recebeUsuarioLogado() {
    this.usuarioLogadoService.retornaUsuario().subscribe(
      (dados) => {
        this.usuarioLogado$ = dados;
      },
      (error) => {
        alert('Erro ao receber usuário logado');
        console.log(error);
      }
    );
  }

  public logout() {
    this.tokenService.excluiToken();
    this.route.navigate(['/']);
  }
}
