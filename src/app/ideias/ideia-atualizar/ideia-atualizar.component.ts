import { IdeiaAtualizacao } from './../types/ideiaAtualizacao';
import { IdeiaDetalhes } from './../types/ideiaDetalhes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/login/service/Usuario.service';
import { IdeiasService } from '../service/ideias.service';

@Component({
  selector: 'app-ideia-atualizar',
  templateUrl: './ideia-atualizar.component.html',
  styleUrls: ['./ideia-atualizar.component.scss'],
})
export class IdeiaAtualizarComponent implements OnInit {
  //@ts-ignore
  public atualizaIdeiaForm: FormGroup;
  //@ts-ignore
  public usuarioId: any;
  //@ts-ignore
  public ideiaId: any;

  constructor(
    private formBuilder: FormBuilder,
    private ideiaService: IdeiasService,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.ideiaId = this.route.snapshot.params['id'];

    this.atualizaIdeiaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      assunto: ['', Validators.required],
      descricao: ['', Validators.required],
      dataInclusao: ['10/01/2023', Validators.required],
      id: [],
    });

    this.usuarioService
      .retornaUsuario()
      .subscribe((usuario) => (this.usuarioId = usuario.id));

    this.ideiaService
      .detalharIdeia(this.ideiaId)
      .subscribe((ideiaDetalhada) => {
        const ideia: IdeiaDetalhes = ideiaDetalhada;
        this.atualizaIdeiaForm.setValue({
          titulo: ideia.titulo,
          assunto: ideia.assunto,
          descricao: ideia.descricao,
          dataInclusao: ideia.dataInclusao,
          id: ideia.id,
        });
      });
  }

  atualizarIdeia() {
    const ideiaAtualizada =
      this.atualizaIdeiaForm.getRawValue() as IdeiaAtualizacao;
    this.ideiaService.atualizarIdeia(ideiaAtualizada).subscribe(
      (res) => {
        alert('Ideia atualizada com sucesso');
        this.router.navigate([`tabs/tab1/detalhar/${this.ideiaId}`]);
      },
      (error) => {
        console.log(ideiaAtualizada);
        alert('ideia não atualizada, contate o administrador');
        console.log(error);
      }
    );
  }
}
