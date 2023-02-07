import { IdeiaDetalhes } from './../types/ideiaDetalhes';
import { IdeiaPage } from './../types/ideiaPage';
import { IdeiaAtualizacao } from './../types/ideiaAtualizacao';
import { IdeiaCadastro } from './../types/ideiaCadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeiasService {

  private readonly API = `${environment.api_url}/ideias`;

  constructor(
    private http : HttpClient
  ) { }

  public cadastrarIdeia(ideia : IdeiaCadastro){
    return this.http.post(this.API, ideia)
  }

  public atualizarIdeia(ideia : IdeiaAtualizacao){
    return this.http.put(this.API, ideia)
  }

  public listarIdeias(){
    return this.http.get<IdeiaPage>(this.API)
    .pipe(
      map((ideiaPage)=> ideiaPage.content)
    );
  }

  public listarIdeiasPorUsuario(id: any){
    const url = `${this.API}/user/${id}`
    return this.http.get<IdeiaDetalhes[]>(url)
  }

  public detalharIdeia(id: any){
    const url = `${this.API}/${id}`
    return this.http.get<IdeiaDetalhes[]>(url)
  }

  public excluirIdeia(id: any){
    const url = `${this.API}/${id}`
    return this.http.delete(url)
  }




}
