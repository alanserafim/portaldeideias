import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { UsuarioService } from '../service/usuario.service';
import { UsuarioList } from './../types/UsuarioList';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.scss'],
})
export class ListaDeUsuariosComponent implements OnInit {
  //@ts-ignore
  usuarios$: Observable<UsuarioList[]>;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.usuarios$ = this.usuarioService.listarUsuarios();
  }

  ngOnInit() {}

  atualizarPage(id: number) {
    const page: string = `/tabs/tab4/atualizar/${id}`;
    this.router.navigate([page]);
  }

  detalharPage(id: number) {
    const page: string = `/tabs/tab4/detalhar/${id}`;
    this.router.navigate([page]);
  }

  apagarPage(id: number) {
    this.presentAlert(id);
  }

  deletaUsuario(id: number) {
    this.usuarioService.deletaUsuario(id).subscribe();
  }

  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      header: `Você tem certeza que deseja apagar o usuário?`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'alert-button-confirm',
          handler: (data) => {
            this.deletaUsuario(id);
          },
        },
        {
          text: 'Não',
          cssClass: 'alert-button-cancel',
        },
      ],
    });

    await alert.present();
  }

  // receberNomeUsuario(id : any){
  //   return this.atualizarService.detalharUsuario(id).subscribe(
  //     resultado => {
  //       this.usuarioNome = resultado.nome;
  //     }
  //   );
  // }
}
