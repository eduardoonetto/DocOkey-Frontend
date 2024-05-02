import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  constructor(private http: HttpClient) { }

  login(user_rut: string, user_password: string): Observable<RootObject> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      //,'x-api-key': `${apiKey}`
    });

    return this.http.post<RootObject>(
      `${URL}/auth/login`,
      {
        "user_rut": user_rut,
        "user_password": user_password
      },
      { headers }
    );
  }
}
