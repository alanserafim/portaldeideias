import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDetails } from 'src/app/usuarios/types/UsuarioDetails';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioMenuService {

  constructor(
    private http: HttpClient
  ) { }

  public detalharUsuario(id: any){
    const API = `${environment.api_url}/usuarios/${id}`;
    return this.http.get<UsuarioDetails>(API)
  }

}
