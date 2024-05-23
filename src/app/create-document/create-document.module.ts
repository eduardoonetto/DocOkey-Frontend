import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDocumentPageRoutingModule } from './create-document-routing.module';

import { CreateDocumentPage } from './create-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDocumentPageRoutingModule
  ],
  declarations: [CreateDocumentPage]
})
export class CreateDocumentPageModule {}
