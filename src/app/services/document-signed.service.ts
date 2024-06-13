import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentSignedService {

  private apiUrl = 'http://localhost:3000/api/v1/document-l';

  constructor(private http: HttpClient) { }

  getDocumentsSigned(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createDocumentSigned(documentData: any): Observable<any> {
    return this.http.post(this.apiUrl, documentData);
  }

  updateDocumentSigned(documentId: number, documentData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${documentId}`, documentData);
  }
}
