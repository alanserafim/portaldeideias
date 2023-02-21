import { IdeiasService } from './../service/ideias.service';
import { IdeiaDetalhes } from './../types/ideiaDetalhes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private router: Router,
    private ideiaService : IdeiasService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.ideiaId = this.route.snapshot.params['id'];
    this.ideiaService.detalharIdeia(this.ideiaId).subscribe(
      (ideia) => this.ideiaDetalhada = ideia
    )
  }

  atualizarIdeiaPage(id: any){
    const page: string = `/tabs/tab1/atualizar/${id}`
    this.router.navigate([page])
  }

  apagarIdeia(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: `Você tem certeza que deseja apagar esta ideia?`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Sim',
          cssClass: 'alert-button-confirm',
          handler: data => {
            this.ideiaService.excluirIdeia(this.ideiaId).subscribe();
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
