import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroDetalhesComponent } from './carro-detalhes/carro-detalhes.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { ListaCarrosResolver } from './lista-carros/lista-carros.resolver';
import { NovoCarroComponent } from './novo-carro/novo-carro.component';

const routes: Routes = [
  {path: "", component: ListaCarrosComponent, resolve : {carros : ListaCarrosResolver}},
  {path: "novo", component: NovoCarroComponent},
  {path: ":id", component: CarroDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
