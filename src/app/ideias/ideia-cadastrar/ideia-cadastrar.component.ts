import { IdeiasService } from './../service/ideias.service';
import { IdeiaCadastro } from './../types/ideiaCadastro';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ideia-cadastrar',
  templateUrl: './ideia-cadastrar.component.html',
  styleUrls: ['./ideia-cadastrar.component.scss'],
})
export class IdeiaCadastrarComponent implements OnInit {

  //@ts-ignore
  public novaIdeiaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ideiaService : IdeiasService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.novaIdeiaForm = this.formBuilder.group(
      {
        titulo: ["", Validators.required],
        assunto: ["", Validators.required],
        descricao: ["", Validators.required],
        dataInclusao: ["", Validators.required],
        usuario: [""],
      }
    )
  }

  public cadastrarIdeia(){
    const novaIdeia = this.novaIdeiaForm.getRawValue() as IdeiaCadastro
    this.ideiaService.cadastrarIdeia(novaIdeia).subscribe(
      (resposta)=>{
        alert("Ideia cadastrada com sucesso");
        this.router.navigate(['tabs/tab4'])
      },
      (error) =>{
        alert("ideia não cadastrada, contate o administrador");
        console.log(error);
      }
    )

  }


}
