import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../home/IUser';
import { environment } from 'src/environments/environment.development';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public cadastrarUsuario(usuario: UserInterface): Observable<any> {
    return this.http.post(API + "/user/signup", usuario)
  }

  public verificarUsuarioExistente(username: string) {
      return this.http.get(API + "/user/exists/" + username)
  }
}
