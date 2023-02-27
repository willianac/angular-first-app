import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { ICarro } from './carros';

const API = environment.apiURL
const NOT_MODIFIED = "304"

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

  public excluiCarro(id:number): Observable<ICarro> {
    return this.http.delete<ICarro>(`${API}/photos/${id}`)
  }

  public curtir(id: number): Observable<boolean> {
    return this.http.post(`${API}/photos/${id}/like`, {}, {observe : "response"})
      .pipe(
        map(() => true),
        catchError((error) => {
          return error.status === NOT_MODIFIED ? of(false) : throwError(() => new Error(error))
        })
      )
  }
}
