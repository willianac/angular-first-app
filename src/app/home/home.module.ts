import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';
import { MensagemFormComponent } from '../mensagem-form/mensagem-form.component';
import { RegisterComponent } from '../register/register.component';

import { ButtonModule } from "primeng/button"
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    HomeComponent, LoginComponent, RegisterComponent, MensagemFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
