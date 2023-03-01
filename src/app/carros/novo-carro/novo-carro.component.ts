import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-novo-carro',
  templateUrl: './novo-carro.component.html',
  styleUrls: ['./novo-carro.component.css']
})
export class NovoCarroComponent {
  imageFile!: File
  progress:number = 0
  preview: string = ""
  novoCarroForm = this.fb.group({
    file: ['', Validators.required],
    description: ['', Validators.maxLength(300)],
    allowComments: [true]
  })

  constructor(private fb: FormBuilder, private carroService: CarrosService, private router: Router) {}

  fazUpload() {
    const description = this.novoCarroForm.get("description")?.value ?? ""
    const allowComments = this.novoCarroForm.get("allowComments")?.value ?? false
    this.carroService.upload(description, allowComments, this.imageFile).pipe(
      finalize(() => this.router.navigateByUrl("/cars"))
    ).subscribe((evento: HttpEvent<any>) => {
      if(evento.type === HttpEventType.UploadProgress) {
        const total = evento.total ?? 1
        this.progress = Math.round(100 * (evento.loaded / total))
      }
    })
  }

  gravaArquivo(arquivo: any) {
    const [file] = arquivo.files
    this.imageFile = file
    const reader = new FileReader()
    reader.onload = (evento: any) => this.preview = evento.target.result
    reader.readAsDataURL(file)
  }
}
