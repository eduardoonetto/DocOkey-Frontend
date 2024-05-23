import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInstitutionPageRoutingModule } from './list-institution-routing.module';

import { ListInstitutionPage } from './list-institution.page';
//Extras si quiero usar HttpClient:
import { InstitutionsService } from '../services/institutions.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListInstitutionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListInstitutionPage],
  providers: [InstitutionsService]
})
export class ListInstitutionPageModule {}
