import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "cars",
    loadChildren: () => import("./carros/carros.module").then(mod => mod.CarrosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
