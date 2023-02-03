import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { UsuarioDetails } from '../types/UsuarioDetails';
import { UsuarioList } from './../types/UsuarioList';

@Injectable({
  providedIn: 'root'
})
export class AtualizarUsuarioService {


  constructor(
    private http: HttpClient
  ) { }

  public atualizarUsuario(usuario : UsuarioList){
    const API = `${environment.api_url}/usuarios`;
    return this.http.put(API, usuario);
  }

  public detalharUsuario(id : number){
    const API = `${environment.api_url}/usuarios/${id}`;
    return this.http.get<UsuarioDetails>(API)
  }

}
