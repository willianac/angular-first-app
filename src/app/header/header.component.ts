import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../autenticacao/user/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private userAuth: UserAuthService, private router: Router) {}
  user$ = this.userAuth.retornaUsuario()  

  public logout() {
    this.userAuth.logout()
    this.router.navigateByUrl("")
  }
}
