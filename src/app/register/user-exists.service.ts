import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, first, map, switchMap } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private registerService: RegisterService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeDoUsuario) => this.registerService.verificarUsuarioExistente(nomeDoUsuario)),
        map((usuarioExiste) => usuarioExiste ? {userAlreadyExists : true} : null),
        debounceTime(300),
        first()
      )
    }
  }
}
