import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NovoUsuarioService } from '../service/novo-usuario.service';
import { NovoUsuario } from '../types/NovoUsuario';
import { cpfValido } from '../validators/cpf-valido.validator';

@Component({
  selector: 'app-cadastro-de-usuario',
  templateUrl: './cadastro-de-usuario.component.html',
  styleUrls: ['./cadastro-de-usuario.component.scss'],
})
export class CadastroDeUsuarioComponent implements OnInit {

  //@ts-ignore
  public novoUsuarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {

  this.novoUsuarioForm = this.formBuilder.group(
    {
      nome: ["", Validators.required],
      registro: [""],
      cpf: ["", [Validators.required, Validators.minLength(11)]],
      setor: ["", Validators.required],
      letraTurno: ["", Validators.required],
      ramal: ["", Validators.required]
    },
    {
      validators: [cpfValido("cpf")]
    }
    )

  }

  public cadastrarUsuario(): void {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario
    this.novoUsuarioService.cadastrarNovoUsario(novoUsuario).subscribe(()=>{
      this.presentToastSucess('middle');
      this.router.navigate(['tabs/tab4']);
    },
    (error)=> {
      this.presentToastFail("middle");
      console.log(error);
      console.log(novoUsuario);
      }
    )
  }


  async presentToastSucess(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Usuário cadastrado com sucesso',
      duration: 3000,
      cssClass: 'custom-toast',
      position: position
    });
    await toast.present();
  }

  async presentToastFail(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Cadastro não realizado',
      duration: 3000,
      cssClass: 'custom-toast',
      position: position
    });
    await toast.present();
  }

}



