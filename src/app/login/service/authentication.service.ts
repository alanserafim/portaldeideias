import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DadosAutenticacao } from '../types/DadosAutenticacao';
import { environment } from './../../../environments/environment.prod';
import { UsuarioLogadoService } from './usuario-logado.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly API = `${environment.api_url}/login`;

  constructor(
    private httpClient: HttpClient,
    private usuarioLogadoService: UsuarioLogadoService
  ) {}

  public autentica(dados: DadosAutenticacao): Observable<HttpResponse<any>> {
    return this.httpClient.post(this.API, dados, { observe: 'response' }).pipe(
      tap((res) => {
        console.log(res);
        const authToken = JSON.stringify(res.body).split('"')[3] ?? '';
        console.log(authToken);
        this.usuarioLogadoService.salvaToken(authToken);
      })
    );
  }
}
