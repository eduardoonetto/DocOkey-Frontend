import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.page.html',
  styleUrls: ['./create-document.page.scss'],
})
export class CreateDocumentPage implements  OnInit {
  public institution: any;
  constructor(private router: Router) {   
  }


  // Este método se ejecuta cada vez que la página está a punto de entrar en la vista
  ionViewWillEnter() {
    this.institution = localStorage.getItem("institucion");
  }


  ngOnInit() {
  }

}
