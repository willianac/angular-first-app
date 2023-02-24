import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule),
    canMatch: [LoginGuard]
  },
  {
    path: "cars",
    loadChildren: () => import("./carros/carros.module").then(mod => mod.CarrosModule),
    canMatch: [AutenticacaoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
