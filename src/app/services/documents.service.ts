import { Injectable } from '@angular/core';
//Add:
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SignDocument } from '../interfaces/interfaces';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  //listar documentos:
  getDocuments(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `${localStorage.getItem('session_id')}`);
    return this.http.get<any>(
      `${URL}documento/listar/${localStorage.getItem('rut')}`,
      { headers }
    );
  }

  //Firmar documento firmante/firmar 
  /*{
    "user_password": "123123",
    "tipo_accion": 1,
    "id_documento": 1,
    "role":"admin"
  }*/
  firmarDocumento(user_password: string, tipo_accion: number, id_documento: number, role: string): Observable<SignDocument> {
        const headers = new HttpHeaders().set('Authorization', `${localStorage.getItem('session_id')}`);
    return this.http.post<SignDocument>(
      `${URL}firmante/firmar`,
      { user_password, tipo_accion, id_documento, role },
      { headers }
    );
  }
}
