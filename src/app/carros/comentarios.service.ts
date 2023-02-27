import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Comentarios, IComentario } from './comentarios';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  public buscaComentarios(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`)
  }

  public gravaComentario(id: number, texto: string): Observable<IComentario> {
    return this.http.post<IComentario>(`${API}/photos/${id}/comments`, {commentText : texto})
  }

}
