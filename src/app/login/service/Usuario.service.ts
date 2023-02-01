import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioTokenInfo } from '../types/UsuarioTokenInfo';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<UsuarioTokenInfo>({});

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as UsuarioTokenInfo;
    this.usuarioSubject.next(usuario)
    //console.log(usuario.id, usuario.sub);

  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token : string){
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluiToken();
    this.usuarioSubject.next({})
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }
}
