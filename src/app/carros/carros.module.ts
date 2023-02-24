import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { CarroComponent } from './carro/carro.component';
import { CardComponent } from '../card/card.component';
import { GradeFotosCarrosComponent } from './grade-fotos-carros/grade-fotos-carros.component';


@NgModule({
  declarations: [
    ListaCarrosComponent,
    CarroComponent,
    CardComponent,
    GradeFotosCarrosComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule
  ]
})
export class CarrosModule { }
