import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentSignedPageRoutingModule } from './document-signed-routing.module';

import { DocumentSignedPage } from './document-signed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentSignedPageRoutingModule
  ],
  declarations: [DocumentSignedPage]
})
export class DocumentSignedPageModule {}
