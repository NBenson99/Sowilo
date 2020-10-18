import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from './../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  ngOnInit() {
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.presentToast('Login realizado com sucesso');
    }
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister)
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.presentToast('Cadastro realizado com sucesso');
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    toast.present();
  }
}