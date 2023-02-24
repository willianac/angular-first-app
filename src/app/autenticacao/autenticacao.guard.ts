import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanMatch {
  constructor(private user: UserAuthService, private router: Router) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.user.estaLogado()) {
        this.router.navigateByUrl("home")
        return false
      }
      return true
  }
}
