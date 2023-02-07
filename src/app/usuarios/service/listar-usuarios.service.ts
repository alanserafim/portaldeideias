import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Page } from '../types/Page';


@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  private readonly API = `${environment.api_url}/usuarios`;

  constructor(
    private http: HttpClient
  ) { }

  public listarUsuarios() {
    return this.http.get<Page>(this.API)
    .pipe(
      map((page)=> page.content)
    );
  }

}
