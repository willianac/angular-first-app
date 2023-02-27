import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICarro } from '../carros';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {
  carros!: ICarro[]

  constructor(private actvRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.actvRoute.params.subscribe(_ => {
      this.carros = this.actvRoute.snapshot.data['carros']
    })
  }  
}
