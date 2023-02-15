import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from '../home/IUser';
import { lowercaseValidator } from './lowercase-validator';
import { RegisterService } from './register.service';
import userAndPassAreEqualValidator from './user&passEqual-validator';
import { UserExistsService } from './user-exists.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder, 
    private userExistsService: UserExistsService,
    private registerService: RegisterService,
    private router: Router
    ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      fullName: ["", Validators.minLength(3)],
      userName: ["", [lowercaseValidator], [this.userExistsService.usuarioJaExiste()] ]
    },
    {
      validators : [userAndPassAreEqualValidator]
    }
    )
  }

  cadastrar() {
    const novoUsuario = this.registerForm.getRawValue() as UserInterface
    this.registerService.cadastrarUsuario(novoUsuario).subscribe({
      next : () => this.router.navigateByUrl(""),
      error: (err: Error) => alert(err.message)
    })
  }
}
