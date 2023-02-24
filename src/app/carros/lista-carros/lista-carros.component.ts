import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { UserAuthService } from 'src/app/autenticacao/user/user-auth.service';
import { ICarro } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  carros$!: Observable<ICarro[]>

  constructor(private carroService: CarrosService, private auth: UserAuthService) {}

  ngOnInit(): void {
    this.carros$ = this.auth.retornaUsuario().pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? ""
        return this.carroService.listaDoUsuario(username)
      })
    )
  }  

}


// ngOnInit(): void {
//   this.auth.retornaUsuario().subscribe((user) => {
//     const userName = user.name ?? ""
//     this.carroService.listaDoUsuario(userName).subscribe((carros) => {
//       this.carros = carros
//       console.log(this.carros)
//     })
//   })
// }