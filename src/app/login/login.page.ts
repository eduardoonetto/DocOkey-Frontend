import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostsService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public password: string; 
  public rut : string;
  public isModalOpen;
  public r_name: string;
  public r_rut: string;
  public r_email: string;
  public r_password: string;


  constructor(private router: Router, private toastController: ToastController, private postsService: PostsService) { 
    this.password = "";
    this.rut = "";
    this.isModalOpen = false;
    this.r_name = "";
    this.r_rut = "";
    this.r_email = "";
    this.r_password = "";
  }

  

  login(){
    console.log(this.rut);
    console.log(this.password);
    if(this.rut != "" && this.password != ""){  
      this.postsService.login(this.rut, this.password).subscribe(data => {
        if(data.status != "ERROR"){
          //Guardar en localStorage:
          localStorage.setItem("username", data.username);
          localStorage.setItem("rut", data.rut);
          localStorage.setItem("email", data.email);
          localStorage.setItem("session_id", data.session_id);
          //Institucion Inicial:
          localStorage.setItem("institucion", "Personal");
          this.router.navigate(['/home']);
        }else{
          this.mostrarToast("Credenciales incorrectas");
        }
      });
    }else{
      this.mostrarToast("Credenciales incorrectas");
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración del Toast en milisegundos
      position: 'top' // Posición del Toast: 'top', 'middle', 'bottom'
    });
    toast.present();
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  registrar(){
    //mostrar todos los r_*
    console.log(this.r_name);
    console.log(this.r_rut);
    console.log(this.r_email);
    //Llamar servicio registro:
    this.postsService.registro(this.r_name, this.r_rut, this.r_email, this.r_password).subscribe(data => {
      console.log(data);
      if(data.status == "OK"){
        this.setOpen(false);
        this.mostrarToast("Registro exitoso, Bienvenido!");

      }else{
        this.mostrarToast("Error al registrar");
      }
    });
  }

  ngOnInit() {
  
  }


  

}
