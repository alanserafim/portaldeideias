import { UsuarioTokenInfo } from './../../login/types/UsuarioTokenInfo';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/login/service/Usuario.service';
import { UsuarioMenuService } from './services/usuario-menu.service';
import { TokenInterceptorService } from 'src/app/login/service/token-interceptor.service';
import { TokenService } from 'src/app/login/service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  //@ts-ignore
  usuarioLogado$ : Observable<UsuarioTokenInfo>;

  //@ts-ignore
  usuario$ : Observable<UsuarioDetails>;

  constructor(
    private usuarioMenuService : UsuarioMenuService,
    private usuarioService : UsuarioService,
    private tokenService : TokenService,
    private route: Router
  ) { }

  ngOnInit() {
    this.recebeUsuarioLogado()
    console.log(this.usuarioLogado$.id);
  }

  public detalharDados(){
    return this.usuarioMenuService.detalharUsuario(this.usuarioLogado$.id).subscribe(
      (dados) => {
        this.usuario$ = dados
        console.log(this.usuario$);
      }, (error) => {
        alert("Erro ao detalhar usuario");
        console.log(error);
      }
    );

  }

  public recebeUsuarioLogado(){
    this.usuarioService.retornaUsuario().subscribe(
      (dados) => {
        this.usuarioLogado$ = dados
      }, (error) => {
        alert("Erro ao receber usuário logado");
        console.log(error);
      }
    );
  }

  public logout(){
    this.tokenService.excluiToken();
    this.route.navigate(['/']);
  }

}
