import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nome: string = ""
  senha: string = ""

  constructor(private autenticacao: AutenticacaoService, private router: Router) {}

  login(): void {
    this.autenticacao.autenticar(this.nome, this.senha)
      .subscribe({
        next: () => this.router.navigateByUrl("cars"),
        error: (e) => console.log(e)
      })
  }
}
