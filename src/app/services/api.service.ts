import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login, Register } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  login(user_rut: string, user_password: string): Observable<Login> {
    console.log(user_rut);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Login>(
      `${URL}login`,
      {
        "user_rut": user_rut,
        "user_password": user_password
      },
      { headers }
    );
  }

  //Crear Registro: /users/registro:
  registro(user_name: string, user_rut: string, user_email: string, user_password: string): Observable<Register> {
    console.log(user_name);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Register>(
      `${URL}users/registro`,
      {
        "username": user_name,
        "rut": user_rut,
        "email": user_email,
        "password": user_password
      },
      { headers }
    );
  }
}
