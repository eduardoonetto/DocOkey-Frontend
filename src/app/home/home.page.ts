import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private toastController: ToastController, private documentservice: DocumentsService, private alertController: AlertController) {}

  public documents: any;
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  GetDocumentos(): void {
    this.documentservice.getDocuments().subscribe(data => {
      if ( data != undefined) {
        //guarde cada elemento para mostrarlo en la vista:
        this.documents = data;
      } else {
        this.mostrarToast("No se encontraron documentos");
      }
    });
  }

 async presentAlert(Titulo : string, tipo_accion: number, id_documento: any, role: string) {
  console.log("id_documento: ", id_documento, "tipo_accion: ", tipo_accion);
    const alert = await this.alertController.create({
      header: Titulo,
      inputs: [
        {name: 'passwordSign', type: 'password', placeholder: 'Ingrese su Password'},
      ],
      buttons: [
        { 
          text: 'Cancelar', 
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
          
        },
        {text: 'Ok', 
          handler: (data) => {
            this.firmarDocumento(data.passwordSign, tipo_accion, id_documento, role);
          }
        }

      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  async firmarDocumento(passwordSign: string, tipo_accion: number, id_documento: any, role: string) {
    if(passwordSign != ''){
      this.documentservice.firmarDocumento(passwordSign, tipo_accion, id_documento, role ).subscribe(data => {
        if(data.status == "OK"){
          if(tipo_accion == 1){
            this.mostrarToast("Documento firmado correctamente");
          }else{
            this.mostrarToast("Documento Rechazado correctamente");
          }
          this.GetDocumentos();
        }else{
          this.mostrarToast(data.msg, 'danger', 'close-circle-outline');
        }
      });
    }
  }

  async mostrarToast(mensaje: string, theme: string = 'success', icono: string = 'checkmark-circle-outline') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
      icon: icono,
      color: theme
    });
    toast.present();
  }

  ionViewWillEnter() {
    // Este método se ejecuta cada vez que la página está a punto de entrar en la vista
    this.GetDocumentos();
  }
}
