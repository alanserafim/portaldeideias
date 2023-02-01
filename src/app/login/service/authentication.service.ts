import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { DadosAutenticacao } from '../types/DadosAutenticacao';
import { Observable, tap  } from 'rxjs';
import { UsuarioService } from './Usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly API = `${environment.api_url}/login`

  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  public autentica(dados : DadosAutenticacao): Observable<HttpResponse<any>> {

    return this.httpClient.post(this.API, dados, {observe: 'response'})
    .pipe(
      tap((res)=> {
        console.log(res);
         const authToken = JSON.stringify(res.body).split('"')[3] ?? '';
         console.log(authToken);
         this.usuarioService.salvaToken(authToken);
      })
    )
  }



}
