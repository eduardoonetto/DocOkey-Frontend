import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-signed',
  templateUrl: './document-signed.page.html',
  styleUrls: ['./document-signed.page.scss'],
})
export class DocumentSignedPage implements OnInit {
  signedDocuments = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadSignedDocuments();
  }

  loadSignedDocuments() {
    this.apiService.getSignedDocuments().subscribe((documents: any[]) => {
      this.signedDocuments = documents;
    });
  }

  viewDetails(documentId: string) {
    this.router.navigate(['/document-details', documentId]);
  }
}
