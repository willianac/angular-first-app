import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private carrosService: CarrosService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.carroId = this.activatedRoute.snapshot.params["id"]
    this.carro$ = this.carrosService.buscaPorId(this.carroId)
  }
}
