import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentSignedPage } from './document-signed.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentSignedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentSignedPageRoutingModule {}
