import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public password: string; 
  public rut : string;


  constructor(private router: Router, private toastController: ToastController) { 
    this.password = "";
    this.rut = "";
  }

  login(){
    console.log(this.rut);
    console.log(this.password);
    if(this.rut == "12345678-9" && this.password == "123456"){  
      this.router.navigate(['/home']);
    }else{
      this.mostrarToast("Credenciales incorrectas");
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración del Toast en milisegundos
      position: 'bottom' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    toast.present();
  }
  
  register(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
  
  }

}
