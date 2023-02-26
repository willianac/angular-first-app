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

  public listaDoUsuario(username: string): Observable<ICarro[]> {
    return this.http.get<ICarro[]>(`${API}/${username}/photos`)
  }

  public buscaPorId(id:number): Observable<ICarro> {
    return this.http.get<ICarro>(`${API}/photos/${id}`)
  }
}
