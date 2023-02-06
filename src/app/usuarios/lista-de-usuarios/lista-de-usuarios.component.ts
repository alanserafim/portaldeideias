import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DeletarUsuarioService } from './../service/deletar-usuario.service';
import { ListarUsuariosService } from './../service/listar-usuarios.service';
import { UsuarioList } from './../types/UsuarioList';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss'],
})
export class ListaDeUsuariosComponent implements OnInit {

  //@ts-ignore
  usuarios$ : Observable<UsuarioList[]>;

  //private users: UsuarioList[]; // Nossa lista de usuários


  constructor(
    private listarUsuariosService : ListarUsuariosService,
    private router : Router,
    private deletarUsuarioService: DeletarUsuarioService,
    private alertController: AlertController
  ) {

    this.usuarios$ = this.listarUsuariosService.listarUsuarios();
  }

  ngOnInit(
  ) {
  }

  atualizarPage(id: number){
    const page: string = `/tabs/tab4/atualizar/${id}`
    this.router.navigate([page])
  }

  detalharPage(id: number){
    const page: string = `/tabs/tab4/detalhar/${id}`
    this.router.navigate([page])
  }

  apagarPage(id: number){
    this.presentAlert(id)

  }

  deletaUsuario(id: number){
    this.deletarUsuarioService.deletaUsuario(id).subscribe()
  }

  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      header: `Você tem certeza que deseja apagar o usuário`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'alert-button-confirm',
          handler: data => {
            this.deletaUsuario(id)
          }
        },
        {
          text: 'Não',
          cssClass: 'alert-button-cancel',
        },

      ],
    });

    await alert.present();
  }






}
