import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioLogadoService } from '../../login/service/usuario-logado.service';
import { UsuarioTokenInfo } from './../../login/types/UsuarioTokenInfo';
import { IdeiasService } from './../service/ideias.service';
import { IdeiaCadastro } from './../types/ideiaCadastro';

@Component({
  selector: 'app-ideia-cadastrar',
  templateUrl: './ideia-cadastrar.component.html',
  styleUrls: ['./ideia-cadastrar.component.scss'],
})
export class IdeiaCadastrarComponent implements OnInit {
  //@ts-ignore
  public novaIdeiaForm: FormGroup;
  //@ts-ignore
  public usuario$: Observable<UsuarioTokenInfo>;

  constructor(
    private formBuilder: FormBuilder,
    private ideiaService: IdeiasService,
    private router: Router,
    private usuarioLogadoService: UsuarioLogadoService
  ) {}

  ngOnInit() {
    this.novaIdeiaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      assunto: ['', Validators.required],
      descricao: ['', Validators.required],
      dataInclusao: ['10/01/2023', Validators.required],
      usuario: [''],
    });
  }

  public cadastrarIdeia() {
    this.atualizaId();
    const novaIdeia = this.novaIdeiaForm.getRawValue() as IdeiaCadastro;
    this.ideiaService.cadastrarIdeia(novaIdeia).subscribe(
      (resposta) => {
        alert('Ideia cadastrada com sucesso');
        this.router.navigate(['tabs/tab1']);
      },
      (error) => {
        console.log(novaIdeia);
        alert('ideia não cadastrada, contate o administrador');
        console.log(error);
      }
    );
  }

  public atualizaId() {
    this.usuarioLogadoService.retornaUsuario().subscribe((resultado) => {
      const usuarioLogado = resultado;
      this.novaIdeiaForm.patchValue({
        usuario: usuarioLogado.id,
      });
    });
  }
}

/*
public detalhamentoUsuario(){
      return this.atualizarService.detalharUsuario(this.usuarioId)
        .subscribe(
          resultado => {
            const usuario : UsuarioDetails = resultado
            console.log(usuario)
            this.atualizarUsuarioForm.setValue({
              id: usuario.id,
              nome: usuario.nome,
              registro: usuario.registro,
              cpf: usuario.cpf,
              perfil: usuario.perfil,
              setor: usuario.setor,
              letraTurno: usuario.letraTurno,
              ramal: usuario.ramal,
            })
    });
    }


*/
