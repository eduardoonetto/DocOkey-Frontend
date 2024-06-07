import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'prefix'
  },
  {
    path: 'list-institution',
    loadChildren: () => import('./list-institution/list-institution.module').then( m => m.ListInstitutionPageModule),
    pathMatch: 'prefix'
  },
  {
    path: 'create-document',
    loadChildren: () => import('./create-document/create-document.module').then( m => m.CreateDocumentPageModule)
  },
  {
    path: 'document-details/:id_documento',
    loadChildren: () => import('./document-details/document-details.module').then( m => m.DocumentDetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
