import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from '../../comentarios';
import { ComentariosService } from '../../comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() photoID!: number
  comentarios$!: Observable<Comentarios>
  comentarioForm = this.formBuilder.group({
    comentario : ["", [Validators.maxLength(300)]]
  })

  constructor(private cs: ComentariosService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.comentarios$ = this.cs.buscaComentarios(this.photoID)
  }

  public gravar() {
    const comentario = this.comentarioForm.get("comentario")?.value ?? ""
    this.comentarios$ = this.cs.gravaComentario(this.photoID, comentario)
      .pipe(
        switchMap(() => this.cs.buscaComentarios(this.photoID)),
        tap(() => {
          this.comentarioForm.reset()
          alert("Comentário salvo!")
        })
      )
  }
}
