import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token.service';
import { UserAuth } from './user-auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private usuarioSubject = new BehaviorSubject<UserAuth>({})

  constructor(private tokenService: TokenService) { 
    if(this.tokenService.possuiToken()) {
      this.decodificaJWT()
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken()
    const usuario = jwtDecode(token) as UserAuth
    this.usuarioSubject.next(usuario)
  }

  public retornaUsuario() {
    return this.usuarioSubject.asObservable()
  }

  public salvaToken(token: string) {
    this.tokenService.salvaToken(token)
    this.decodificaJWT()
  }

  public logout() {
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

  public estaLogado() {
    return this.tokenService.possuiToken()
  }
}
