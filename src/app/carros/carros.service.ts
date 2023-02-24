import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { ICarro } from './carros';

const API = environment.apiURL
@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  constructor(private http: HttpClient, private token: TokenService) { }

  listaDoUsuario(username: string): Observable<ICarro[]> {
    const authToken = this.token.retornaToken()
    const headers = new HttpHeaders().append("x-access-token", authToken)
    return this.http.get<ICarro[]>(`${API}/${username}/photos`, {headers})
  }
}
