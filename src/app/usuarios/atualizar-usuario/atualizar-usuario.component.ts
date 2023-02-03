import { UsuarioDetails } from './../types/UsuarioDetails';
import { tap, Observable, map } from 'rxjs';
import { UsuarioList } from './../types/UsuarioList';
import { AtualizarUsuarioService } from './../service/atualizar-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss'],
})
export class AtualizarUsuarioComponent implements OnInit {
//@ts-ignore
usuarioId : number;

//@ts-ignore
usuario$ : Observable<UsuarioDetails>;



//@ts-ignore
public atualizarUsuarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private atualizarService : AtualizarUsuarioService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {

  }

  ngOnInit() {
    this.usuarioId = this.route.snapshot.params['id'];
    console.log(this.usuarioId);
    //@ts-ignore
    this.usuario$ = this.detalhamentoUsuario();
    console.log(this.usuario$);

    this.atualizarUsuarioForm = this.formBuilder.group(
      {
        id: ["",[]],
        nome: ["", []],
        registro: ["", []],
        cpf: ["", []],
        perfil: ["", []],
        setor: ["", []],
        letraTurno: ["", []],
        ramal: ["", []],
    }


    )




  }

  atualizarUsuario() {
    const usuarioAtualizado = this.atualizarUsuarioForm.getRawValue() as UsuarioList
    this.atualizarService.atualizarUsuario(usuarioAtualizado)
    .subscribe(()=>{
      this.presentToastSucess('middle');
      this.router.navigate(['tabs/tab4']);
    },
    (error)=> {
      this.presentToastFail("middle");
      console.log(error);
      console.log(usuarioAtualizado);
      }
    );

    }

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





    async presentToastSucess(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Usuário atualizado com sucesso',
        duration: 3000,
        cssClass: 'custom-toast',
        position: position
      });
      await toast.present();
    }

    async presentToastFail(position: 'top' | 'middle' | 'bottom') {
      const toast = await this.toastController.create({
        message: 'Erro: usuário não atualizado',
        duration: 3000,
        cssClass: 'custom-toast',
        position: position
      });
      await toast.present();
    }

}
