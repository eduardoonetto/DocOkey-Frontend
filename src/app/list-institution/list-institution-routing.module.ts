import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInstitutionPage } from './list-institution.page';

const routes: Routes = [
  {
    path: '',
    component: ListInstitutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInstitutionPageRoutingModule {}
