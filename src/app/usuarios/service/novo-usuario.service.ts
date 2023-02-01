import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NovoUsuario } from '../types/NovoUsuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  private readonly API = `${environment.api_url}/usuarios`

  constructor(
    private http: HttpClient
  ) { }

  public cadastrarNovoUsario(usuario : NovoUsuario){
    return this.http.post(this.API, usuario)
  }

}
