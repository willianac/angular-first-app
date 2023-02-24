import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { CarroComponent } from './carro/carro.component';


@NgModule({
  declarations: [
    ListaCarrosComponent,
    CarroComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule
  ]
})
export class CarrosModule { }
