import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { NovoUsuario } from '../types/NovoUsuario';
import { Page } from '../types/Page';
import { UsuarioDetails } from '../types/UsuarioDetails';
import { UsuarioList } from '../types/UsuarioList';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  public cadastrarNovoUsario(usuario: NovoUsuario) {
    const API = `${environment.api_url}/usuarios`;
    return this.http.post(API, usuario);
  }

  public listarUsuarios() {
    const API = `${environment.api_url}/usuarios`;
    return this.http.get<Page>(API).pipe(map((page) => page.content));
  }

  public detalharUsuario(id: number): Observable<any> {
    const API = `${environment.api_url}/usuarios/${id}`;
    return this.http.get<UsuarioDetails>(API);
  }

  public atualizarUsuario(usuario: UsuarioList) {
    const API = `${environment.api_url}/usuarios`;
    return this.http.put(API, usuario);
  }

  public deletaUsuario(id: number) {
    const API = `${environment.api_url}/usuarios/${id}`;
    return this.http.delete(API);
  }
}
