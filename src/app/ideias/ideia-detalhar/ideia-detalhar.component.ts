import { IdeiasService } from './../service/ideias.service';
import { IdeiaDetalhes } from './../types/ideiaDetalhes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ideia-detalhar',
  templateUrl: './ideia-detalhar.component.html',
  styleUrls: ['./ideia-detalhar.component.scss'],
})
export class IdeiaDetalharComponent implements OnInit {

  //@ts-ignore
  ideiaId : number;

  //@ts-ignore
  ideiaDetalhada: IdeiaDetalhes;

  constructor(
    private route: ActivatedRoute,
    private ideiaService : IdeiasService
  ) { }

  ngOnInit() {
    this.ideiaId = this.route.snapshot.params['id'];
    this.ideiaService.detalharIdeia(this.ideiaId).subscribe(
      (ideia) => this.ideiaDetalhada = ideia
    )
  }



}
