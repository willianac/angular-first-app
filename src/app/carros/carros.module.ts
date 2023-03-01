import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CarrosRoutingModule } from './carros-routing.module';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { CarroComponent } from './carro/carro.component';
import { CardComponent } from '../card/card.component';
import { GradeFotosCarrosComponent } from './grade-fotos-carros/grade-fotos-carros.component';
import { CarroDetalhesComponent } from './carro-detalhes/carro-detalhes.component';
import { ComentariosComponent } from './carro-detalhes/comentarios/comentarios.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { NovoCarroComponent } from './novo-carro/novo-carro.component';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    ListaCarrosComponent,
    CarroComponent,
    CardComponent,
    GradeFotosCarrosComponent,
    CarroDetalhesComponent,
    ComentariosComponent,
    NovoCarroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarrosRoutingModule,
    InputTextareaModule,
    ButtonModule,
    FileUploadModule,
  ]
})
export class CarrosModule { }
