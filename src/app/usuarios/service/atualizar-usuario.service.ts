import { UsuarioList } from './../types/UsuarioList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AtualizarUsuarioService {


  constructor(
    private http: HttpClient
  ) { }

  public atualizarUsuario(id : number, usuario : UsuarioList){
    const API = `${environment.api_url}/usuario/${id}`;
    return this.http.post(API, usuario);
  }

  public detalharUsuario(id : number){
    const API = `${environment.api_url}/usuario/${id}`;
    return this.http.get<UsuarioList>(API);
  }

}
