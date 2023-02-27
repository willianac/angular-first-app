import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ICarro } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carro-detalhes',
  templateUrl: './carro-detalhes.component.html',
  styleUrls: ['./carro-detalhes.component.css']
})
export class CarroDetalhesComponent implements OnInit {
  carroId!: number
  carro$!: Observable<ICarro>

  constructor(private carrosService: CarrosService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.carroId = this.activatedRoute.snapshot.params["id"]
    this.carro$ = this.carrosService.buscaPorId(this.carroId)
  }

  curtir() {
    this.carrosService.curtir(this.carroId).subscribe({
      next : (curtida) => {
        if(curtida) {
          this.carro$ = this.carrosService.buscaPorId(this.carroId)
        }
      }
    })
  }

  excluir() {
    this.carrosService.excluiCarro(this.carroId).subscribe({
      next : () => this.router.navigateByUrl("cars")
    })
  }
}
