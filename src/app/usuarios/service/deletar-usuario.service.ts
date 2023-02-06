import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeletarUsuarioService {

  constructor(
    private http: HttpClient
  ) { }


  public deletaUsuario(id : number){
    const API = `${environment.api_url}/usuarios/${id}`;
    return this.http.delete(API)
  }
}
