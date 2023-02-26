import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroDetalhesComponent } from './carro-detalhes/carro-detalhes.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

const routes: Routes = [
  {path: "", component: ListaCarrosComponent},
  {path: ":id", component: CarroDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
