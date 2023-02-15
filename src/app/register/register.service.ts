import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../home/IUser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public cadastrarUsuario(usuario: UserInterface): Observable<any> {
    return this.http.post("http://localhost:3000/user/signup", usuario)
  }

  public verificarUsuarioExistente(username: string) {
      return this.http.get("http://localhost:3000/user/exists/" + username)
  }
}
