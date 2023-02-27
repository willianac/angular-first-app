import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { UserAuthService } from 'src/app/autenticacao/user/user-auth.service';
import { ICarro } from '../carros';
import { CarrosService } from '../carros.service';

@Injectable({
  providedIn: 'root'
})
export class ListaCarrosResolver implements Resolve<ICarro[]> {

  constructor(private carroService: CarrosService, private auth: UserAuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICarro[]> {
    return this.auth.retornaUsuario().pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? ""
        return this.carroService.listaDoUsuario(username)
      })
    )
  }
}
