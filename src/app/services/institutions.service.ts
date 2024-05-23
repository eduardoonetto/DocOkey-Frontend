import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';  // Importa el operador filter
import { roles_by_rut_admin } from '../interfaces/interfaces';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {
  private selectedInstitutionSubject: BehaviorSubject<roles_by_rut_admin | null> = new BehaviorSubject<roles_by_rut_admin | null>(null);
  selectedInstitution$: Observable<roles_by_rut_admin | null> = this.selectedInstitutionSubject.asObservable().pipe(
    filter(institution => institution !== null)  // Filtra los valores nulos
  );

  constructor(private http: HttpClient) { }

  getInstitutionsByRut(user_rut: any): Observable<roles_by_rut_admin> {
    const headers = new HttpHeaders().set('Authorization', `${localStorage.getItem('session_id')}`);
    return this.http.get<roles_by_rut_admin>(
      `${URL}roles_by_rut_admin/${user_rut}`,
      { headers }
    );
  }

  setSelectedInstitution(institution: roles_by_rut_admin): void {
    this.selectedInstitutionSubject.next(institution);
  }

  getSelectedInstitution(): Observable<roles_by_rut_admin | null> {
    return this.selectedInstitution$;
  }
}
