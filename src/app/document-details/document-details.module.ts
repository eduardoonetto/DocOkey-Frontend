import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentDetailsPageRoutingModule } from './document-details-routing.module';

import { DocumentDetailsPage } from './document-details.page';
//Extras si quiero usar HttpClient:
import { DocumentsService } from '../services/documents.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentDetailsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DocumentDetailsPage],
  providers: [DocumentsService]
})
export class DocumentDetailsPageModule {}
