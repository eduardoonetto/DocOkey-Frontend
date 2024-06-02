import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { InstitutionsService } from '../services/institutions.service';

@Component({
  selector: 'app-list-institution',
  templateUrl: './list-institution.page.html',
  styleUrls: ['./list-institution.page.scss'],
})
export class ListInstitutionPage implements OnInit {
  public institution_selected : string;
  public institutions: any;
  constructor(private toastController: ToastController, private router: Router, private institutionsService: InstitutionsService) {
    this.institution_selected = "";
    this.institutions = [];
   }

  sendToCreate(){
    if(this.institution_selected != ""){
      localStorage.setItem("institucion", this.institution_selected);
      console.log(this.institution_selected);
      this.router.navigate(['/create-document']);
    }else{
      this.mostrarToast("Seleccione una institucion");
    }
  }

  cargarInstituciones(): void{
    //Cargar Instituciones:
    this.institutionsService.getInstitutionsByRut(localStorage.getItem("rut")).subscribe(data => {
      //si es status 200:
      
      if(data.instituciones.length > 0 || data.status == 200){
        for (let i = 0; i < data.instituciones.length; i++) {
          this.institutions.push(data.instituciones[i]);
        }
      }else{
        this.mostrarToast("No se encontraron instituciones");
      }
    });
  }

  ionViewWillEnter() {
    // Este método se ejecuta cada vez que la página está a punto de entrar en la vista
    this.institutions = [];
    this.cargarInstituciones();
  }

  ngOnInit():void {
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración del Toast en milisegundos
      position: 'top', // Posición del Toast: 'top', 'middle', 'bottom'
      icon: "alert-circle",
      color: "danger"
    });
    toast.present();
  }

}
