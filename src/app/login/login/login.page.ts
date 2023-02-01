import { DadosAutenticacao } from './../types/DadosAutenticacao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // @ts-ignore
  public dados: DadosAutenticacao;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController

  ) { }

  ngOnInit() {
    this.dados = { nome: "", cpf: ""}
  }

  public login(): void {
    this.authService.autentica(this.dados).subscribe(()=>{
    this.router.navigate(['tabs']);
    }, (error)=> {
      this.presentToast('bottom')
      console.log(this.dados);
      console.log(error);
    }
    )
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Nome ou senha inválida',
      duration: 3000,
      cssClass: 'custom-toast',
      position: position
    });
    await toast.present();
  }



}
