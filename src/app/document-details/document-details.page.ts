import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.page.html',
  styleUrls: ['./document-details.page.scss'],
})
export class DocumentDetailsPage implements OnInit {
  public documents: any;
  public signers: any;
  public id_document: string;
  public base64PDF: string;

  constructor(private documentservice: DocumentsService, private route: ActivatedRoute) { 
    this.documents = [];
    this.signers = [];
    this.id_document = this.route.snapshot.paramMap.get('id_documento') || ''; // Provide a default value for id_documento
    this.base64PDF = '';
  }
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.getMetadataDocument(parseInt(this.id_document));
  }
  
  getMetadataDocument(id_documento: number): void {
    this.documentservice.getMetaDataDocument(id_documento).subscribe(data => {
      if ( data.status == 'OK') {
        //guarde cada elemento para mostrarlo en la vista:
        this.documents = data;
        this.base64PDF = 'data:application/pdf;base64,' + data.documento_b64;
        console.log("Base64: " + this.base64PDF);
        this.signers = data.signers;
        console.log("Documentos: ", this.documents);
        console.log("Signers: ", this.signers);
      }
    });
  }

  downloadPDF() {
    // Crear un elemento <a> en el DOM
    const link = document.createElement('a');
    link.setAttribute('href', this.base64PDF);
    link.setAttribute('download', 'archivo.pdf');

    // Simular clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpiar el elemento <a> del DOM después de la descarga
    document.body.removeChild(link);
  }
}
